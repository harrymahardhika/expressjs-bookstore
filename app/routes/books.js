const express = require('express')
const router = express.Router()
const Book = require('../repositories/Book')
const bookRepository = new Book()
const BookValidator = require('../validators/BookValidator')

router.get('/', async (req, res) => {
  try {
    const books = await bookRepository.get()
    res.json(books)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const book = await bookRepository.find(req.params.id)
    res.json(book)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.post('/', new BookValidator().validate(), async (req, res) => {
  try {
    const newBook = req.body
    await bookRepository.store(newBook)
    res.status(201).json({ message: 'Book created' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.put('/:id', new BookValidator().validate(), async (req, res) => {
  try {
    const updatedBook = req.body
    await bookRepository.update(req.params.id, updatedBook)
    res.json({ message: 'Book updated' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await bookRepository.delete(req.params.id)
    res.json({ message: 'Book deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

module.exports = router
