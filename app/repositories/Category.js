const Repository = require('../support/Repository')

class Category extends Repository {
  constructor() {
    super('categories')
  }
}

module.exports = Category
