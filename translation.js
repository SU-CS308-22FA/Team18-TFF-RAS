import dotenv from "dotenv";
dotenv.config();
import fs from 'fs';
import date from 'date-and-time';
import {chromium} from 'playwright';

if (process.env.LOGGER === 'winston') {
    const winston = require('winston');
    const DailyRotateFile = require('winston-daily-rotate-file');
    const { format } = require('logform');

    const alignedWithColorsAndTime = format.combine(
        format.colorize(),
        format.timestamp(),
        format.align(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    );

    const transports = [
        new DailyRotateFile({
            filename: './logs/general-%DATE%.log',
            //datePattern: 'YYYY-MM-DD.',
            prepend: true,
            colorize: true,
            maxSize:'10m',
            json: false, //Setting JSON as false
            level: process.env.LOG_LEVEL,
            maxFiles:'10d',
            name : 'rotateLog',
            zippedArchive: true,
            timestamp: function () {
                return Date.now();
            },
            formatter: function (options) {
                return options.timestamp() + ' (' + options.level + ') : ' + (options.message ? options.message : '')
            }
        }),

        new winston.transports.Console({
            level: process.env.LOG_LEVEL,
            name : 'consoleLog'
        })
    ];

    const logger = winston.createLogger({
        format : alignedWithColorsAndTime,
        transports: transports
    });
}


function Log() {
    let that = this;
    let level = 0;
    const levels = {
        off : 99,
        debug : 0,
        info : 1,
        warn : 2,
        error : 3,
        fatal : 4
    };

    this.setLevel = function (l) {
        if (process.env.LOGGER === 'winston') {
            winston.transports['rotateLog'].level = l;
            winston.transports['consoleLog'].level = l;
        }
        level = (l && levels[l]) ? levels[l] : (levels[process.env.LOG_LEVEL] || 0);
    };

    this.debug = function (...args) {
        if (level > levels.debug) return;
        process.env.LOGGER === 'winston' ? logger.debug(args) : console.debug(date.format(new Date(),"YYYY-MM-DD HH:mm:ss") +" : ",...args);
    };
    this.warn = function (...args) {
        if (level > levels.warn) return;
        process.env.LOGGER === 'winston' ? logger.warn(args) : console.warn(date.format(new Date(),"YYYY-MM-DD HH:mm:ss") +" : ",...args);
    };
    this.info = function (...args) {
        if (level > levels.info) return;
        process.env.LOGGER === 'winston' ? logger.info(args) : console.info(date.format(new Date(),"YYYY-MM-DD HH:mm:ss") +" : ",...args);
    };
    this.error = function (...args) {
        if (level > levels.error) return;
        process.env.LOGGER === 'winston' ? logger.error(args) : console.error(date.format(new Date(),"YYYY-MM-DD HH:mm:ss") +" : ",...args);
    };
    this.fatal = function (...args) {
        if (level > levels.fatal) return;
        process.env.LOGGER === 'winston' ? logger.emerg(args) : console.exception(date.format(new Date(),"YYYY-MM-DD HH:mm:ss") +" : ",...args);
    };
}

let logger = new Log();
logger.setLevel();

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
    /*
    const handle = await page.evaluateHandle(() => ({window, document}));
const properties = await handle.getProperties();
const windowHandle = properties.get('window');
const documentHandle = properties.get('document');
     */


    const page = await context.newPage();
    const preloadFile = fs.readFileSync('./controllers/headless-spoof.js', 'utf8');
    await page.addInitScript(preloadFile);

    if (process.env.NODE_ENV === "production") {
        //await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
    }

    page.on('console', msg => logger.debug('PAGE LOG:', msg.text()));
    logger.debug("playwright init completed");
    return [browser, page];
}

async function collectData(browser, page, leechUrl, str) {
    
    try {
        await page.goto(leechUrl, {waitUntil: 'networkidle'});
        await page.locator("//div[contains(@class, QFw9Te)]/textarea[contains(@class, 'er8xn')]").fill(str);
        await page.waitForSelector('span.ryNqvb', { //find the cell that holds the details for the game and wait until it is visible
            state: "visible"
        });
        let translation = await page.locator("//span[contains(@class, 'ryNqvb')]").elementHandles();
        return await translation[0].innerText();
    } catch (e) {
        logger.error("Exception in collect data : ", e.toString());
    }
}




async function translate(str) {
    let page, browser;
    let translation;
    try {
        [browser, page] = await initializePage();
        let leechUrl = 'https://translate.google.com/?sl=tr&tl=en&op=translate';
        translation = await collectData(browser, page, leechUrl, str);

    } catch (e) {
        logger.error("Exception in leech : ", e);
    }
    logger.debug("will close the browser", browser.close);
    if (browser && browser.close) await browser.close();
    console.log(translation);
    return translation;
}

// translate("alperen çok zeki");
export default{translate};