'use strict'

const logger = require('./logger')
const mongoose = require('./mongodbKafka')

/**
 * @class
 * @name MongoTools
 */
class MongoTools {
  /**
     * @function isMongoConnected
     * @author Marcelo Melo
     * @param {object} req
     * @param {object} res
     * @param {function} next
     * @returns void
     */
  async isMongoConnected (req, res, next) {
    try {
      // check mongo connection
      if (mongoose.connection.readyState.toString() === '1') {
        next()
      } else {
        logger.error({ message: 'MongoTools.isMongoConnected: ### DISCONNECTED to MongoDB' })
        res.status(500).json({ message: 'Something got wrong. Please contact support.' })
      }
    } catch (err) {
      logger.error({ message: 'MongoTools.isMongoConnected: ' + err.stack })
      res.status(500).json({ message: 'Something got wrong. Please contact support.' })
    }
  }
}

module.exports = new MongoTools()
