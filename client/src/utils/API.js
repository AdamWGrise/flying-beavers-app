import axios from "axios";

export default {
  // Gets all shopItems
  getShopItems: function () {
    return axios.get("/api/shopItems");
  },
  // Gets the shopItem with the given id
  getShopItem: function (id) {
    return axios.get("/api/shopItems/" + id);
  },
  // Deletes the shopItem with the given id
  deleteShopItem: function (id) {
    return axios.delete("/api/shopItems/" + id);
  },
  // Stars the shopItem with the given id
  starShopItem: function (id) {
    return axios.put("/api/shopItems/" + id);
  },
  // Saves a bshopItem to the database
  saveShopItem: function (shopItemData) {
    console.log("shopItemDate", shopItemData);
    return axios.post("/api/shopItems", shopItemData);
  }
};
