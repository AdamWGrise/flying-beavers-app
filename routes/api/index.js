const path = require("path");
const router = require("express").Router();
const shopItemRoutes = require("./shopItems");
const shopListRoutes = require("./shopLists");
const familyInfoRoutes = require("./familyInfos");

// Shopping Item routes
router.use("/shopItems", shopItemRoutes);
// Shopping List routes
router.use("/shopLists", shopListRoutes);
// Shopping List routes
router.use("/familyInfos", familyInfoRoutes);

module.exports = router;
