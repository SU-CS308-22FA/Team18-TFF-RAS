require('dotenv').config();
const fs = require('fs');
const Log = require("./Log");
const Referee = require("./refShcema.js")
let logger = new Log();
const match = require('./tff-bot-matchID');
logger.setLevel();

async function initializePage() {
    logger.debug("browser init started");
    const {chromium} = require('playwright');

    const browser = await chromium.launch({
        headless: process.env.NODE_ENV === "production",
        args: ["--disable-gpu"]
    });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        bypassCSP: true,
        locale: 'tr-TR',
        viewport: {
            width: 1280,
            height: 800
        }
    });

    const page = await context.newPage();
    const preloadFile = fs.readFileSync(__dirname + '/headless-spoof.js', 'utf8');
    await page.addInitScript(preloadFile);

    if (process.env.NODE_ENV === "production") {
        //await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
    }

    page.on('console', msg => logger.debug('PAGE LOG:', msg.text()));
    logger.debug("playwright init completed");
    return [browser, page];
}


//scrape for the first time for referees to put to database
async function collectData(browser, page, leechUrl) {
    let referee = {name: "", licenceNumber: "", classification: "", region: "", matchesRuled: [],RefID: ""};
    try {
        //open up the page
        await page.goto(leechUrl, {waitUntil: 'networkidle'});

        try {
            await page.waitForSelector("//*[contains(@id, 'dtlHakemBilgi')]", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
            });
            let refName = await page.locator("span[id$='dtlHakemBilgi_Label1']").elementHandles();
            let refLicence = await page.locator("//span[contains(@id,'dtlHakemBilgi_Label3')]").elementHandles();
            let refClass = await page.locator("//span[contains(@id,'dtlHakemBilgi_Label4')]").elementHandles();
            let refReg = await page.locator("//span[contains(@id,'dtlHakemBilgi_Label6')]").elementHandles();
            referee.name = await refName[0].innerText();
            referee.licenceNumber = await refLicence[0].innerText();
            referee.classification = await refClass[0].innerText();
            referee.region = await refReg[0].innerText();


            await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
            });

            while (true) {
                await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
                });
                

            let tbody = await page.$("table.MasterTable_TFF_Contents tbody");
            let matchRows = await tbody.$$("tr"); //https://playwright.dev/docs/api/class-page#page-query-selector-all
            for(let i=0;i<matchRows.length;i++) {
                let cells = await matchRows[i].$$("td");
                let anc = await cells[1].$('a');
                let mUrl = await anc.getAttribute("href");
                referee.matchesRuled.push({
                    home : await cells[0].innerText(),
                    away : await cells[2].innerText(),
                    score : await cells[1].innerText(),
                    date : await cells[3].innerText(),
                    task : await cells[4].innerText(),
                    organisation : await cells[5].innerText(),
                    matchDetail: await match.leechWithHref(mUrl),
                    MatchUrl: mUrl
                });
                    
            }

                let check = await page.locator("//tfoot/tr/td/a[last()]").allTextContents();
                console.log(check);
                if (isNaN(check[0])) {
                    await page.locator("//tfoot/tr/td/*[last()]").click();
                    console.log("click complete\n");
                }
                else{
                    break;
                }
            }


        } catch (err) {
            logger.error("Exception in referee scrape : ", err.toString());
        }

    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }

    return referee;
}

async function leechWithRefID(refid) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = "https://www.tff.org/Default.aspx?pageID=531&hakemID="+refid;
        data = await collectData(browser, page, leechUrl);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close);
    if (browser && browser.close) await browser.close();

    // console.log(data);
    data.RefID=refid;
    return data;
}

//scraping for weekly refreshes

//retreive the last match unique url for stopping when the match is reached
async function getLastUrl(refid){
    let arr = await Referee.find({refID: refid}).select('matchesRuled -_id');
	return arr[0].matchesRuled[0].MatchUrl;
}

async function collectDataForRefresh(browser, page, leechUrl,refid) {
    newMatches=[];
    try {
        //open up the page
        await page.goto(leechUrl, {waitUntil: 'networkidle'});

        try {

            await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
            });
            // let rows = await page.locator("table.MasterTable_TFF_Contents tbody td").elementHandles();
            // console.log(rows.length);


            await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
            timeout: 2000,
            state: "visible"
            });
                

            let tbody = await page.$("table.MasterTable_TFF_Contents tbody");
            let matchRows = await tbody.$$("tr");
            for(let i=0;i<matchRows.length;i++) {
                let cells = await matchRows[i].$$("td");
                let anc = await cells[1].$('a');
                let mUrl = await anc.getAttribute("href");
                
                //need to get the first matchUrl in db with referee refID matches ruled 0th index
                let checkUrl = await getLastUrl(refid)
                if (mUrl == checkUrl) {
                    break;
                }
                newMatches.push({
                    home : await cells[0].innerText(),
                    away : await cells[2].innerText(),
                    score : await cells[1].innerText(),
                    date : await cells[3].innerText(),
                    task : await cells[4].innerText(),
                    organisation : await cells[5].innerText(),
                    matchDetail: await match.leechWithHref(mUrl),
                    MatchUrl: mUrl
                });
                    
            }
            
        } catch (err) {
            logger.error("Exception in collectDataForRefresh scrape : ", err.toString());
        }

    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }

    return newMatches;
}
async function leechForRefresh(refid) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = "https://www.tff.org/Default.aspx?pageID=531&hakemID="+refid;
        data = await collectDataForRefresh(browser, page, leechUrl, refid);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close);
    if (browser && browser.close) await browser.close();
    return data;
}

//refıds=["20372","20160","1141865","1152086","1064324","1140355","1090884","21019","1144690","21156","19493","20668","1140611","18972","1091628","1092081","19445","1091799","1091989","20204","1144469","20554","1385054"]

//fill the database with this function by only invoking it one time no other invokation is needed
async function fillRefs() {
    refIDs=["20372"];
    for (let i = 0; i < refIDs.length; i++) {
        
        console.log(refIDs[i]);
        //scrape it again
        let ref = await leechWithRefID(refIDs[i]);
        await Referee.deleteOne({ refID: refIDs[i]}).then(function(){
            console.log("Data deleted"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
        const t = await Referee.create({
            name: ref.name,
            lisenceNumber: ref.licenceNumber,
            classification: ref.classification,
            region: ref.region,
            matchesRuled: ref.matchesRuled,
            refID:refIDs[i]
        });
        await t.save().then(function(){
            console.log("Data re-entered"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
    }
    return true;
}
//this will be scheduled weekly for refreshing the matches that is made in that week
async function refreshRefs() {
    refIDs=["959285","2100056","1621805"];
    for (let i = 0; i < refIDs.length; i++) {
        console.log(refIDs[i]);
        let newMatches =await leechForRefresh(refIDs[i]);
        //updating the matches ruled array newmatches need to be concatenated to the beginning
        if (newMatches.length!=0) {
            let arr = await Referee.find({refID: refIDs[i]}).select('matchesRuled -_id');
            let pastMatches = arr[0].matchesRuled;
            let allMatches = newMatches.concat(pastMatches);

            Referee.updateOne({refID: refIDs[i]}, { matchesRuled: allMatches },function (err) {
            if (err) throw err;
            else console.log("updated");
        });
        }
    }
}

module.exports={fillRefs,leechWithRefID,refreshRefs}