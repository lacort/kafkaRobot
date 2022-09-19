// App Enviroment
require('dotenv').config()


// Set up App resources

const ModelKafka = require('./app/models/kafkaModel')
const logger = require('./app/components/logger')
const mongo = require('mongodb')
const ObjectID = mongo.ObjectId
const prompt = require('prompt-sync')({sigint: true});


const intChoice = prompt('Choose mode (1) -> Rapist Mode (2) -> Stupid Rapist Mode: ')

if(intChoice == 1){
  const num = prompt('Choose a number of records: ')
  rapist(num)
  
}else{
  const numInstances = Number(prompt('Choose a number of instance: '))
  let num = Number(prompt('Choose a number of records: '))
  for(let i = 0; i < numInstances; i++){
    rapist(num)
  } 

}
function random(){
  const arrayChar = ['A','B','C']
  return arrayChar[Math.floor(
    Math.random() * (2 - 0 + 1) + 0
  )]

}
async function rapist(intCount){
  for(let i=0; i<intCount; i++){
    let strChar = random()
   
    modelKafka = new ModelKafka({
      _id: new ObjectID(),
      order: i,
      char: strChar 
    })
    
    await modelKafka.save()
  
  }
  
}





