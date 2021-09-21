const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('get')
})

router.get('/:id', (req, res, next) => {
  res.send('get by id')

})

router.post('/', (req, res, next) => {
  res.send('create')

})

router.put('/:id', (req, res, next) => {
  res.send('edit')

})

router.delete('/:id', (req, res, next) => {
  res.send('delete')

})

router.post('/:id/food_items', (req, res, next) => {
  res.send('make food')

})

router.put('/food_items/:itemId', (req, res, next) => {
  res.send('edit food')

})

router.post('/:id/guests', (req, res, next) => {
  res.send('create guests')

})

router.put('/:id/guests', (req, res, next) => {
  res.send('edit guests')

})

module.exports = router