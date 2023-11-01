const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Book List')
})

router.get('/:id', (req, res) => {
  res.send('Book Details for ID: ' + req.params.id)
})

router.post('/', (req, res) => {
  res.send('Create Book')
})

router.put('/:id', (req, res) => {
  res.send('Update Book with ID: ' + req.params.id)
})

router.delete('/:id', (req, res) => {
  res.send('Delete Book with ID: ' + req.params.id)
})

module.exports = router
