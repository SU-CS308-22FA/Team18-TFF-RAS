import dotenv from "dotenv";
dotenv.config();
import {chromium} from "playwright";
import { readFileSync } from 'fs';
import Log from "./Log.js";
let logger = new Log();
logger.setLevel();


import { dirname } from "path";
import { fileURLToPath } from "url";

async function initializePage() {
    logger.debug("browser init started");

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
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const preloadFile = readFileSync(__dirname + '/headless-spoof.js', 'utf8');
    await page.addInitScript(preloadFile);

    if (process.env.NODE_ENV === "production") {
        //await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
    }

    page.on('console', msg => logger.debug('PAGE LOG:', msg.text()));
    logger.debug("playwright init completed");
    return [browser, page];
}

async function collectData(browser, page, leechUrl) {
    let referee = {name: "", licenceNumber: "", classification: "", region: "", matchesRuled: []};
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
            let rows = await page.locator("table.MasterTable_TFF_Contents tbody td").elementHandles();
            console.log(rows.length);


            while (true) {
                await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
                });
                // let matches = await page.locator("table.MasterTable_TFF_Contents >tbody tr td").allTextContents();
                // //*[@id="ctl00_MPane_m_531_2816_ctnr_m_531_2816_grdSonuc_ctl01"]/tbody/tr

            let tbody = await page.$("table.MasterTable_TFF_Contents tbody");
            let matchRows = await tbody.$$("tr"); //https://playwright.dev/docs/api/class-page#page-query-selector-all
            for(let i=0;i<matchRows.length;i++) {
                let cells = await matchRows[i].$$("td");
                referee.matchesRuled.push({
                    home : await cells[0].innerText(),
                    away : await cells[2].innerText(),
                    score : await cells[1].innerText(),
                    date : await cells[3].innerText(),
                    task : await cells[4].innerText(),
                    organisation : await cells[5].innerText()
                });
            }

                // allMatches=allMatches.concat(matches);
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
            

            
            //tfoot/tr/td/a[last()] .

            
            
            // for (let i = 0; i < allMatches.length; i+=6) {
            //     let match = {home: allMatches[i],score: allMatches[i+1],away:allMatches[i+2], date: allMatches[i+3], task: allMatches[i+4], organisation: allMatches[i+5]};
            //     referee.matchesRuled.push(match);
            // }

            


        } catch (err) {
            logger.error("Exception in referee scrape : ", err.toString());
        }
        // let matches = await page.locator("table.MasterTable_TFF_Contents >tbody tr td a").allTextContents();
        // // let date = await page.locator("//tbody/tr/td[4]").allTextContents();
        // // matches = matches.concat(date);
        // allMatches=allMatches.concat(matches);

    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }

    return referee;
}

//pass the parameter as string
async function leech(refid) {
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

    
    return data;
}

export default leech