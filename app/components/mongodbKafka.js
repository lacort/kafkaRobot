'use strict'

const logger = require('./logger')
const objConfig = require('../../config/main')
const MongooseDb = require('mongoose').Mongoose

const mongooseKafka = new MongooseDb()

// Mongo DB Connection
mongooseKafka.connect(objConfig.kafka.strConnection, objConfig.kafka.options)

// Set up a var to test connection
const mongodb = mongooseKafka.connection

// Bind Connection Events
mongodb.on('error', function (err) {
  logger.error({ message: '### ERROR connecting with MongoDB kafka: ' + err })
})

mongodb.on('reconnected', function (err) {
  logger.info({ message: '### RECONNECTED to MongoDB kafka' + err })
})

mongodb.on('disconnected', function (err) {
  logger.error({ message: '### DISCONNECTED to MongoDB kafka' + err })
})

mongodb.on('reconnectFailed', function (err) {
  logger.error({ message: '### RECONNECTED to MongoDB kafka FAILED!' + err })
})

// Log the connection confirmation
mongodb.on('open', function () {
  logger.info({ message: '### MongoDB kafka Database connected successfully on dev' })
})

module.exports = mongooseKafka
