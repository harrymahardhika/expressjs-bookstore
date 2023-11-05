const app = require('../../app')
const listEndpoints = require('express-list-endpoints')

const endpoints = listEndpoints(app)
console.log('Available routes:')
endpoints.forEach((endpoint) => {
  console.log(`${endpoint.path} -> [${endpoint.methods.join(', ')}]`)
})

process.exit(0)
