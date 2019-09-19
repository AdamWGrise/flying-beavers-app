const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familymanager"
);

const shopItemSeed = [
  {
    shoppingList: "HyVee",
    category: "Produce",
    itemName: "Apples",
    quantity: "6",
    quantityUnits: "",
    date: new Date(Date.now())
  },
  {
    shoppingList: "HyVee",
    category: "Produce",
    itemName: "Bananas",
    quantity: "3",
    quantityUnits: "",
    date: new Date(Date.now())
  },
  {
    shoppingList: "HyVee",
    category: "Produce",
    itemName: "Blueberries",
    quantity: "1",
    quantityUnits: "18-oz container",
    date: new Date(Date.now())
  },
  {
    shoppingList: "HyVee",
    category: "Dairy",
    itemName: "Cheddar Slices",
    quantity: "1",
    quantityUnits: "16-oz package",
    date: new Date(Date.now())
  },
  {
    shoppingList: "Costco",
    category: "Home Goods",
    itemName: "AA Batteries",
    quantity: "48",
    quantityUnits: "",
    date: new Date(Date.now())
  },
  {
    shoppingList: "HyVee",
    category: "Pet Supplies",
    itemName: "Dog Food",
    quantity: "1",
    quantityUnits: "Large bag",
    date: new Date(Date.now())
  }

];

db.ShopItem
  .remove({})
  .then(() =>
  db.ShopItem.collection.insertMany(shopItemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
