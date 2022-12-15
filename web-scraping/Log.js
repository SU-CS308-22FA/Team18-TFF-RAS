require('dotenv').config();
let date = require('date-and-time');
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

module.exports = Log;