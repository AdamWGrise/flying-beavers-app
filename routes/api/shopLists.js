const router = require('express').Router()
const shopListsController = require('../../controllers/shopListsController')

// Matches with '/api/shopLists'
router.route('/')
  .get(shopListsController.findAll)
  .post(shopListsController.create)

// Matches with '/api/shopLists/:id'
router
  .route('/:id')
  .get(shopListsController.findById)
  .put(shopListsController.update)
  .delete(shopListsController.remove)

module.exports = router
