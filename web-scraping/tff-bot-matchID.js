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
    let refereeResults = [];
    let observerResults = [];
    // let homeCards = [];
    // let awayCards = [];
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
            // //home
            // let homeCardPlayers = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the anchor elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute
            // let homeCardPlayerTime = await page.locator("//td[not(@class)]/span[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the span elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute
            // let homeCardPlayerCardImg = await page.locator("//td[not(@class)]/img[contains(@id,'grdTakim1_rptKartlar')]").elementHandles(); //select all the span elements that has grdTakim1_rptKartlar in their id attribute and inside a td that does not have class attribute

            // for(let i=0;i<homeCardPlayers.length;i++) {
            //     homeCards.push({
            //         name : await homeCardPlayers[i].innerText(),
            //         playerUrl : await homeCardPlayers[i].getAttribute("href"),
            //         time : await homeCardPlayerTime[i].innerText(),
            //         cardType : (await homeCardPlayerCardImg[i].getAttribute("src")).indexOf("sarikart") !== -1 ? "yellow" : "red" //might be wrong as there can be 2 yellow then red
            //     });
            // }

            // //away
            // let awayCardPlayers = await page.locator("//td[not(@class)]/a[contains(@id,'grdTakim2_rptKartlar')]").elementHandles(); 
            // let awayCardPlayerTime = await page.locator("//td[not(@class)]/span[contains(@id,'grdTakim2_rptKartlar')]").elementHandles();
            // let awayCardPlayerCardImg = await page.locator("//td[not(@class)]/img[contains(@id,'grdTakim2_rptKartlar')]").elementHandles();

            // for(let i=0;i<awayCardPlayers.length;i++) {
            //     awayCards.push({
            //         name : await awayCardPlayers[i].innerText(),
            //         playerUrl : await awayCardPlayers[i].getAttribute("href"),
            //         time : await awayCardPlayerTime[i].innerText(),
            //         cardType : (await awayCardPlayerCardImg[i].getAttribute("src")).indexOf("sarikart") !== -1 ? "yellow" : "red" //might be wrong as there can be 2 yellow then red
            //     });
            // }
        } catch (err) {
            logger.error("Exception in referee scrape : ", err.toString());
        }


    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }
    let data = {refs : refereeResults, teams: teamsInfo, observers : observerResults, time: timeInfo};
    return data;
}


async function leech(matchid) {
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

    
    return data;
}

export default leech