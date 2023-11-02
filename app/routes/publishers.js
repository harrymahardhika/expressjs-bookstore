const express = require('express')
const router = express.Router()
const Publisher = require('../repositories/Publisher')
const publisherRepository = new Publisher()
const PublisherValidator = require('../validators/PublisherValidator')

router.get('/', async (req, res) => {
  try {
    const publishers = await publisherRepository.get()
    res.json(publishers)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const publisher = await publisherRepository.find(req.params.id)
    res.json(publisher)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.post('/', new PublisherValidator().validate(), async (req, res) => {
  try {
    const newPublisher = req.body
    await publisherRepository.store(newPublisher)
    res.status(201).json({ message: 'Publisher created' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.put('/:id', new PublisherValidator().validate(), async (req, res) => {
  try {
    const updatedPublisher = req.body
    await publisherRepository.update(req.params.id, updatedPublisher)
    res.json({ message: 'Publisher updated' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await publisherRepository.delete(req.params.id)
    res.json({ message: 'Publisher deleted' })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

module.exports = router
