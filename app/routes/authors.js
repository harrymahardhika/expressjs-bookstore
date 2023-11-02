const express = require('express')
const router = express.Router()
const Author = require('../repositories/Author')
const authorRepository = new Author()
const AuthorValidator = require('../validators/AuthorValidator')

router.get('/', async (req, res) => {
  try {
    const authors = await authorRepository.get()
    res.json(authors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const author = await authorRepository.find(req.params.id)
    res.json(author)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.post('/', new AuthorValidator().validate(), async (req, res) => {
  try {
    const newAuthor = req.body
    await authorRepository.store(newAuthor)
    res.status(201).json({ message: 'Author created' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.put('/:id', new AuthorValidator().validate(), async (req, res) => {
  try {
    const updatedAuthor = req.body
    await authorRepository.update(req.params.id, updatedAuthor)
    res.json({ message: 'Author updated' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await authorRepository.delete(req.params.id)
    res.json({ message: 'Author deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

module.exports = router
