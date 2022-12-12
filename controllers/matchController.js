import dotenv from "dotenv";
dotenv.config();
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import fs from 'fs';

// const Match = require("./matchShcema")
import Fixture from '../models/FixtureSchema.js';

// const Log =require('./Log.js');
import Log from './Log.js'

let logger = new Log();
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
    /*
    const handle = await page.evaluateHandle(() => ({window, document}));
const properties = await handle.getProperties();
const windowHandle = properties.get('window');
const documentHandle = properties.get('document');
     */


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

async function parseGoalInfo(str) {
    let goal = {Player : "", Time: "", How : ""};
    let mini="";
    for (let i = 0; i < str.length; i++) {
        if (str[i]===",") {
            goal.Player=(mini);
            mini="";
            i++;
        }
        if (str[i]===".") {
            goal.Time=(mini);
            mini="";
            i+=5;
        }
        if (str[i]===")") {
            goal.How=(mini);
            mini=="";
        }
        mini+=str[i];
    }
    return goal;
}

async function collectData(browser, page, leechUrl) {
    let refereeResults = [];
    let observerResults = [];
    let homeCards = [];
    let awayCards = [];
    let homeGoals = [];
    let awayGoals = [];
    let teamsInfo = {home: "", away: "", homeScore: "", awayScore:""};
    let timeInfo = {date : "", hour: ""};
    try {
        //open up the page
        await page.goto(leechUrl, {waitUntil: 'networkidle'});

        try {
            await page.waitForSelector('td.MacDetayAltBG', { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
            });

            let homeTeamName = await page.locator("//a[contains(@id,'MacBilgiDisplay1_dtMacBilgisi_lnkTakim1')]").elementHandles();
            let awayTeamName = await page.locator("//a[contains(@id,'MacBilgiDisplay1_dtMacBilgisi_lnkTakim2')]").elementHandles();
            let homeTeamScore = await page.locator("//span[contains(@id,'MacBilgiDisplay1_dtMacBilgisi_lblTakim1Skor')]").elementHandles();
            let awayTeamScore = await page.locator("//span[contains(@id,'MacBilgiDisplay1_dtMacBilgisi_Label12')]").elementHandles();
            //teamsInfo = {home: await homeTeamName[0].innerText(), away: await awayTeamName[0].innerText(), homeScore : await homeTeamScore[0].innerText(), awayScore : await awayTeamScore[0].innerText()}
            teamsInfo.home = await homeTeamName[0].innerText();
            teamsInfo.away = await awayTeamName[0].innerText();
            teamsInfo.awayScore = await awayTeamScore[0].innerText();
            teamsInfo.homeScore = await homeTeamScore[0].innerText();

            
            
            //find all the anchors that holds the referee information via css selectors
            let refs = await page.locator("td.MacDetayAltBG>div a").allTextContents();

            let divSpans = await page.locator("td.MacDetayAltBG>div span").allTextContents();

            let timeStr = divSpans[3];
            let arr = timeStr.split("-");
            timeInfo.date = arr[0].trim();
            timeInfo.hour = arr[1].trim();

            const regex = /(.*)\((.*)\)/gm;
            for (let i = 4; i < 6; i++) {
                let element = divSpans[i];
                let observer = {name: "", duty: ""};
                let m; //match object to be used in regular expression
                while ((m = regex.exec(element)) !== null) {

                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    m.forEach((match, groupIndex) => {
                        switch (groupIndex) {
                            case 1 :
                                observer.name = match;
                                break;
                            case 2:
                                observer.duty = match;
                                break;
                            default:
                                break;
                        }
                    });
                }
                observerResults.push(observer);
            }
            /* refs is like below
            [
              'CORENDON AIRLINES PARK ANTALYA STADI - ANTALYA',
              'ATİLLA KARAOĞLAN(Hakem)',
              'MUSTAFA EMRE EYİSOY(1. Yardımcı Hakem)',
              'İBRAHİM ÇAĞLAR UYARCAN(2. Yardımcı Hakem)',
              'SUAT ARSLANBOĞA(Dördüncü Hakem)',
              'ALPER ULUSOY(VAR)',
              'ALPER ÇETİN(AVAR)'
            ]
             */

            /*
            divSpans is like this
            [
            'Spor Toto Süper Lig (Profesyonel Takım) ',
            'Maç Kodu:',
            '1009',
            '7.08.2022 - 19:15',
            'İSMET ARZUMAN(Gözlemci)',
            'SEBAHATTİN ŞAHİN(Gözlemci)',
            'LEVENT KARABUDAK(Temsilci)',
            'NAHİT KARAKAŞ(Temsilci)',
            'REFİK EMRE(Temsilci)'
            ]
            */

            //regular expression to strip out the names and duties
            
            for(let i=1;i<refs.length;i++) { //starts from 1, as 0 has the name of stadium

                let str = refs[i];

                let ref = { name : "", duty : ""}; //the record object  to hold the referee details

                let m; //match object to be used in regular expression
                while ((m = regex.exec(str)) !== null) {

                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }


                    m.forEach((match, groupIndex) => {
                        switch (groupIndex) {
                            case 1 :
                                ref.name = match;
                                break;
                            case 2:
                                ref.duty = match;
                                break;
                            default:
                                break;
                        }
                    });
                }
                //push the referee record object to the array
                refereeResults.push(ref);
            }
            // //cards
            //home
            let homeCardPlayers = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the anchor elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute
            let homeCardPlayerTime = await page.locator("//td[not(@class)]/span[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the span elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute
            let homeCardPlayerCardImg = await page.locator("//td[not(@class)]/img[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the span elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute

            for(let i=0;i<homeCardPlayers.length;i++) {
                homeCards.push({
                    name : await homeCardPlayers[i].innerText(),
                    playerUrl : await homeCardPlayers[i].getAttribute("href"),
                    time : await homeCardPlayerTime[i].innerText(),
                    cardType : (await homeCardPlayerCardImg[i].getAttribute("src")).indexOf("sarikart") !== -1 ? "yellow" : "red" //might be wrong as there can be 2 yellow then red
                });
            }

            //away
            let awayCardPlayers = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim2_rptKartlar')]").elementHandles(); 
            let awayCardPlayerTime = await page.locator("//td[not(@class)]/span[contains(@id,'grdTakim2_rptKartlar')]").elementHandles();
            let awayCardPlayerCardImg = await page.locator("//td[not(@class)]/img[contains(@id,'grdTakim2_rptKartlar')]").elementHandles();

            for(let i=0;i<awayCardPlayers.length;i++) {
                awayCards.push({
                    name : await awayCardPlayers[i].innerText(),
                    playerUrl : await awayCardPlayers[i].getAttribute("href"),
                    time : await awayCardPlayerTime[i].innerText(),
                    cardType : (await awayCardPlayerCardImg[i].getAttribute("src")).indexOf("sarikart") !== -1 ? "yellow" : "red" //might be wrong as there can be 2 yellow then red
                });
            }

            //goals
            //home 
            let homeGoalsInfo = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim1_rptGoller')]").elementHandles();
            let awayGoalsInfo = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim2_rptGoller')]").elementHandles();
            for (let i = 0; i < homeGoalsInfo.length; i++) {
                homeGoals.push(await parseGoalInfo(await homeGoalsInfo[i].innerText()));
            }
            for (let i = 0; i < awayGoalsInfo.length; i++) {
                awayGoals.push(await parseGoalInfo(await awayGoalsInfo[i].innerText()));
            }

        } catch (err) {
            logger.error("Exception in referee scrape : ", err.toString());
        }


    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }
    let data = {Refs : refereeResults, Teams: teamsInfo, Observers : observerResults, Time: timeInfo, HomeCards: homeCards, AwayCards: awayCards, HomeGoalsDetails:homeGoals, AwayGoalsDetails:awayGoals, MatchID:""};
    return data;
}

async function leechWithMatchID(matchid) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = 'https://www.tff.org/Default.aspx?pageID=29&macId='+matchid;
        data = await collectData(browser, page, leechUrl);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close());
    if (browser && browser.close()) await browser.close();
    data.MatchID=matchid;
    return data;
}

//this function is used once for putting all matches in the current season fixture to database
async function matchesToDB() {
    for (let i = 0; i < 342 /*match code*/; i++) {
        let search = 234706 + i;
        //scrape it again
        mongoose.connect("mongodb+srv://cs308team18:BestTeamThereEverWasTeam18@tff-ras.q9epijv.mongodb.net/?retryWrites=true&w=majority");
        let match = await leechWithMatchID(search.toString());
        console.log(match);
        await Fixture.deleteOne({ MatchID: search.toString()}).then(function(){
            console.log("Data deleted"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
        const t = await Fixture.create({
            Refs: match.Refs,
            Teams: match.Teams,
            Observers: match.Observers,
            Time: match.Time,
            MatchID:match.MatchID
        });
        await t.save().then(function(){
            console.log("Data re-entered"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
    }
    return true;

}

async function leechWithHref(hrefStr) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = 'https://www.tff.org/'+hrefStr;
        data = await collectData(browser, page, leechUrl);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close());
    if (browser && browser.close()) await browser.close();

    
    return data;
}

async function collectDataForDate(browser, page, leechUrl, date) {
    let matchesRtn = [];
    try {
        //open up the page
        await page.goto(leechUrl, {waitUntil: 'networkidle'});
//*[@id="ctl00_MPane_m_531_2816_ctnr_m_531_2816_dtlHakemBilgi"]
        try {
            
            await page.locator("//a[contains(@id, 'RadTabStrip1_Tab3')]").click();
            await page.locator("//input[contains(@id, 'dateBaslangic_dateInput_TextBox')]").fill(date);
            await page.locator("//input[contains(@id, 'dateBitis_dateInput_TextBox')]").fill(date);
            await page.locator("//input[contains(@id, 'btnSave3')]").click();
            //let refs = await page.locator("td.MacDetayAltBG>div a").allTextContents();
            await page.waitForSelector("table.MasterTable_TFF_Contents", { //find the cell that holds the details for the game and wait until it is visible
                timeout: 2000,
                state: "visible"
            });
            let matches = await page.locator("table.MasterTable_TFF_Contents >tbody tr td a").allTextContents();
            
            for (let i = 0; i < matches.length; i+=4) {

                let match = {matchID: matches[i], home: matches[i+1], score: matches[i+2], away: matches[i+3]};
                matchesRtn.push(match);
                
            }
            console.log(matches.length);


        } catch (err) {
            logger.error("Exception in referee scrape : ", err.toString());
        }


    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }

    return matchesRtn;
}

//pass the parameter as string
async function leechDate(date) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = "https://www.tff.org/default.aspx?pageID=520";
        data = await collectDataForDate(browser, page, leechUrl, date);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close);
    if (browser && browser.close) await browser.close();

    
    return data;
}


// mongoose.connect("mongodb+srv://cs308team18:BestTeamThereEverWasTeam18@tff-ras.q9epijv.mongodb.net/?retryWrites=true&w=majority");

/**
 *Created for finding the input substring in document's Teams field
 * @param {string} search - The substr to look for
 * @since 11.12.2022
 * @return {Object} Matches - Matches that contain match details that has a field containing the substring parameter
 * @example searchFor("galata")
 */
async function searchBySubstr(search) {
    search = search.trim();
    let Matches = await Fixture.find({$or : [{'Teams.home' : new RegExp(search ,'i')}, {'Teams.away' : new RegExp(search ,'i')}]});
    console.log(Matches.length);
    return Matches;
}


// matchesToDB();


export default {leechWithMatchID,leechWithHref, leechDate, searchBySubstr};