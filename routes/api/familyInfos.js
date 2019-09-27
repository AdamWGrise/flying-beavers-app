const router = require("express").Router();
const familyInfosController = require("../../controllers/familyInfosController");

// Matches with "/api/familyInfos"
router.route("/")
    .get(familyInfosController.findAll)
    .post(familyInfosController.create);

// Matches with "/api/familyInfos/:id"
router
    .route("/:id")
    .get(familyInfosController.findById)
    .put(familyInfosController.update)
    .delete(familyInfosController.remove);

module.exports = router;
