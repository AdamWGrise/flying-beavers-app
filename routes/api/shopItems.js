const router = require('express').Router()
const shopItemsController = require('../../controllers/shopItemsController')

// Matches with '/api/shopItems'
router
  .route('/')
  .get(shopItemsController.findAll)
  .post(shopItemsController.create)

  // Matches with '/api/shopItems/:id'
router
.route('/:id')
.get(shopItemsController.findById)
.delete(shopItemsController.remove)

// Matches with '/api/shopItems/star/:id'
router
  .route('/star/:id')
  .put(shopItemsController.updateStar)

// Matches with '/api/shopItems/check/:id'
router
  .route('/check/:id')
  .put(shopItemsController.updateCheck)

module.exports = router
