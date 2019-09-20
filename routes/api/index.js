const path = require("path");
const router = require("express").Router();
const shopItemRoutes = require("./shopItems");

// Book routes
router.use("/shopItems", shopItemRoutes);

module.exports = router;
