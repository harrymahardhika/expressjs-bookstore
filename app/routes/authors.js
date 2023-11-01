const express = require('express')
const router = express.Router()
const Author = require('../repositories/Author')
const authorRepository = new Author()

router.get('/', (req, res) => {
  authorRepository.getAll((err, authors) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
    res.json(authors)
  })
})

router.get('/:id', (req, res) => {
  res.send('Author Details for ID: ' + req.params.id)
})

router.post('/', (req, res) => {
  res.send('Create Author')
})

router.put('/:id', (req, res) => {
  res.send('Update Author with ID: ' + req.params.id)
})

router.delete('/:id', (req, res) => {
  res.send('Delete Author with ID: ' + req.params.id)
})

module.exports = router
