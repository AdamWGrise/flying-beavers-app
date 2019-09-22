const path = require("path");
const router = require("express").Router();
const shopItemRoutes = require("./shopItems");
const shopListRoutes = require("./shopLists");

// Shopping Item routes
router.use("/shopItems", shopItemRoutes);
// Shopping List routes
router.use("/shopLists", shopListRoutes);

module.exports = router;
