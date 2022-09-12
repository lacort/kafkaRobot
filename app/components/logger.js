'use strict'

const { format } = require('winston')
const winston = require('winston')

/**
 * @class
 * @name Logger
 */
class Logger {
  /**
     * @constructor
     */
  constructor () {
    let level, silent, objFormat

    // Defines log level
    switch (process.env.APP_ENV) {
      case 'test':
        level = 'debug'
        silent = true
        objFormat = format.json()
        break
      case 'dev':
        level = 'debug'
        silent = false
        objFormat = format.combine(
          format.colorize(),
          format.splat(),
          format.printf(
            info => `${new Date().toISOString()} ${info.level}: ${info.message}`
          )
        )
        break
      default:
        level = 'debug'
        silent = false
        objFormat = format.combine(
          format.timestamp(),
          format.json()
        )
        break
    }

    // Defines Options
    this.options = {
      console: {
        level,
        silent,
        handleExceptions: true,
        format: objFormat
      }
    }

    return this.createLogger()
  }

  /**
     * @function createLogger
     * @description Create the logger transports
     * @author Davi Crystal
     * @returns Winston Logger Transports
     */

  createLogger () {
    return winston.createLogger({

      level: 'info',
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.Console(this.options.console)
      ]
    })
  }
}

module.exports = new Logger()
