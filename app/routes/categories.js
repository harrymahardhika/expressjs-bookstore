const express = require('express')
const router = express.Router()
const Category = require('../repositories/Category')
const categoryRepository = new Category()
const CategoryValidator = require('../validators/CategoryValidator')

router.get('/', async (req, res) => {
  try {
    const categories = await categoryRepository.get()
    res.json(categories)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const category = await categoryRepository.find(req.params.id)
    res.json(category)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.post('/', new CategoryValidator().validate(), async (req, res) => {
  try {
    const newCategory = req.body
    await categoryRepository.store(newCategory)
    res.status(201).json({ message: 'Category created' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.put('/:id', new CategoryValidator().validate(), async (req, res) => {
  try {
    const updatedCategory = req.body
    await categoryRepository.update(req.params.id, updatedCategory)
    res.json({ message: 'Category updated' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await categoryRepository.delete(req.params.id)
    res.json({ message: 'Category deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

module.exports = router
