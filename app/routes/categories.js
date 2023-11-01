const express = require('express')
const router = express.Router()
const Category = require('../repositories/Category')
const categoryRepository = new Category()

router.get('/', (req, res) => {
  categoryRepository.getAll((err, categories) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
    res.json(categories)
  })
})

router.get('/:id', (req, res) => {
  res.send('Category Details for ID: ' + req.params.id)
})

router.post('/', (req, res) => {
  res.send('Create Category')
})

router.put('/:id', (req, res) => {
  res.send('Update Category with ID: ' + req.params.id)
})

router.delete('/:id', (req, res) => {
  res.send('Delete Category with ID: ' + req.params.id)
})

module.exports = router
