const Repository = require('../support/Repository')

class Publisher extends Repository {
  constructor() {
    super('publishers')
  }
}

module.exports = Publisher
