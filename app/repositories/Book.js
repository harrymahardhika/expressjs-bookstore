const Repository = require('../support/Repository')

class Book extends Repository {
  constructor() {
    super('books')
  }
}

module.exports = Book
