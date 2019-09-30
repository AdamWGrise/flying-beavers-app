const path = require("path");
const router = require("express").Router();
const shopItemRoutes = require("./shopItems");
const shopListRoutes = require("./shopLists");
const familyInfoRoutes = require("./familyInfos");
const calendarRoutes = require("./calendar");


// Shopping Item routes
router.use("/shopItems", shopItemRoutes);
// Shopping List routes
router.use("/shopLists", shopListRoutes);
// Family Info routes
router.use("/familyInfos", familyInfoRoutes);
// Calendar routes
router.use("/calendar", calendarRoutes);

module.exports = router;
