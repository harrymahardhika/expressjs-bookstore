const Validator = require('../support/Validator')
const { check } = require('express-validator')

class AuthorValidator extends Validator {
  rules = [check('name').notEmpty().withMessage('Name is required')]
}

module.exports = AuthorValidator
