const router = require("express").Router();
const shopItemsController = require("../../controllers/shopItemsController");

// Matches with "/api/shopItems"
router.route("/")
  .get(shopItemsController.findAll)
  .post(shopItemsController.create);

// Matches with "/api/shopItems/:id"
router
  .route("/:id")
  .get(shopItemsController.findById)
  .put(shopItemsController.update)
  .delete(shopItemsController.remove);

module.exports = router;
