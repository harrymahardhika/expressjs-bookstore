const express = require('express')
const router = express.Router()

const booksRoutes = require('./routes/books')
const categoriesRoutes = require('./routes/categories')

router.use('/books', booksRoutes)
router.use('/categories', categoriesRoutes)

module.exports = router
