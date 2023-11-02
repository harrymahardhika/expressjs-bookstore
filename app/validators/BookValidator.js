const Validator = require('../support/Validator')
const Author = require('../repositories/Author')
const authorRepository = new Author()
const Category = require('../repositories/Category')
const categoryRepository = new Category()
const Publisher = require('../repositories/Publisher')
const publisherRepository = new Publisher()
const { check } = require('express-validator')
class BookValidator extends Validator {
  rules = [
    check('title')
      .notEmpty()
      .isLength({ min: 1, max: 255 })
      .withMessage('Title must be between 1 and 255 characters'),

    check('author_id')
      .notEmpty()
      .custom(async (authorId) => {
        await authorRepository.find(authorId).catch((error) => {
          throw new Error('Invalid author ID')
        })
      }),

    check('category_id')
      .notEmpty()
      .custom(async (categoryId) => {
        await categoryRepository.find(categoryId).catch((error) => {
          throw new Error('Invalid category ID')
        })
      }),

    check('publisher_id')
      .notEmpty()
      .custom(async (publisherId) => {
        await publisherRepository.find(publisherId).catch((error) => {
          throw new Error('Invalid publisher ID')
        })
      }),

    check('published_year')
      .notEmpty()
      .isInt({ min: 1700, max: new Date().getFullYear() })
      .withMessage(`Published year must be between 1700 and ${new Date().getFullYear()}`),

    check('isbn')
      .notEmpty()
      .isLength({ min: 1, max: 255 })
      .withMessage('ISBN must be between 1 and 255 characters')
  ]
}

module.exports = BookValidator
