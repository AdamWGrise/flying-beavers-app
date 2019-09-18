const express = require("express");
const router = express.Router();

// Load User model
const Item = require("../../models/Item");

// Add Grocery Item
router.post("/add", (req, res) => {

    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
        currentlyOut: req.body.currentlyOut
    });
    newItem.save();
    res.send();
})

// Get grocery item

router.post("/itemlist", (req, res) => {
    
    Item.find({}, () => {
      const itemList = {};
  
      res.send(itemList);  
    });
  });

  
module.exports = router;