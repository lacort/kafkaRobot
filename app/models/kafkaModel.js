'use strict'

const mongodbKafka = require('../components/mongodbKafka')
const Schema = mongodbKafka.Schema
const ObjectId = Schema.ObjectId


const KafkaSchema = new Schema({
  _id: {
    type: ObjectId
  },
  order: Number,
  timeStamp: Date
}, {
  versionKey: false
})

const Model = mongodbKafka.model('kafka', KafkaSchema, 'default')

module.exports = Model
