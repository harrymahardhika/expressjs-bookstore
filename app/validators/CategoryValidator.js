const Validator = require('../support/Validator')
const { check } = require('express-validator')

class CategoryValidator extends Validator {
  rules = [check('name').notEmpty().withMessage('Name is required')]
}

module.exports = CategoryValidator
