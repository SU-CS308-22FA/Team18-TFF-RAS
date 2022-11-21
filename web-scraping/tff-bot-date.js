// require('dotenv').config();
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import Log from "./Log.js"
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

async function collectData(browser, page, leechUrl, date) {
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
async function leech(date) {
    let page, browser, data;
    try {
        [browser, page] = await initializePage();
        let leechUrl = "https://www.tff.org/default.aspx?pageID=520";
        data = await collectData(browser, page, leechUrl, date);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close);
    if (browser && browser.close) await browser.close();

    
    return data;
}

export default leech