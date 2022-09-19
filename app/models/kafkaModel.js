'use strict'

const mongodbKafka = require('../components/mongodbKafka')
const Schema = mongodbKafka.Schema
const ObjectId = Schema.ObjectId


const KafkaSchema = new Schema({
  _id: {
    type: ObjectId
  },
  order: Number,
  char: String
}, {
  versionKey: false,
  timestamps: true
})
KafkaSchema.index({createdAt: 1},{expireAfterSeconds: 3600});

const Model = mongodbKafka.model('kafka', KafkaSchema, 'default')

module.exports = Model
