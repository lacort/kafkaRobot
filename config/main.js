module.exports = {

  // MONGO DB CONFIG
  kafka: {
    strConnection: 'mongodb+srv://aiven:OVh4U5LH87m39D21@mdb-reports-sandbox-dea9eba9.mongo.ondigitalocean.com/aiven?tls=true&authSource=admin&replicaSet=mdb-reports-sandbox',
    options: {
      keepAlive: true,
      keepAliveInitialDelay: 300000
     
    }
  }
}
