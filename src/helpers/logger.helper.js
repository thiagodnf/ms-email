"use strict";

const winston = require("winston");
const util = require('util');
const { createLogger, format, transports } = require('winston');
const { combine, colorize, timestamp, printf, padLevels} = format;

const LEVEL = process.env.NODE_ENV === 'production' ? 'info' : 'debug';

class Logger {

    constructor() {

        const myFormat = printf(({ level, message, label, timestamp, ...rest }) => {

            const splat = rest[Symbol.for('splat')];

            const strArgs = splat ? splat.map((s) => util.formatWithOptions({ colors: true, depth: 10 }, s)).join(' ') : '';

            return `${timestamp}  ${level}  ${util.formatWithOptions({ colors: true, depth: 10}, message)} ${strArgs}`;
        });

        this.logger = createLogger({
            level: LEVEL,
            transports: [
                new transports.Console({
                    level: LEVEL,
                    format: combine(
                        colorize(),
                        timestamp({
                            format: 'YYYY-M-DD HH:mm:ss',
                        }),
                        padLevels(),
                        myFormat
                    )
                })
            ]
        });
    }

    stream() {

        let that = this;

        return {
            write: function (message, encoding) {
                that.debug(message.replace( /[\r\n]+/gm, "" ));
            }
        };
    }

    info(message, args="") {
        this.logger.info(message, args);
    }

    debug(message, args="") {
        this.logger.debug(message, args);
    }

    error(message, args="") {
        this.logger.error(message, args);
    }
}

module.exports = new Logger();
