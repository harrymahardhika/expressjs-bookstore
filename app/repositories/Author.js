const Repository = require('../support/Repository')

class Author extends Repository {
  constructor() {
    super('authors')
  }
}

module.exports = Author
