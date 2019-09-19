import axios from "axios";

export default {
  // Gets all shopItems
  getShopItems: function() {
    return axios.get("/api/shopItems");
  },
  // Gets the shopItem with the given id
  getShopItem: function(id) {
    return axios.get("/api/shopItems/" + id);
  },
  // Deletes the shopItem with the given id
  deleteShopItem: function(id) {
    return axios.delete("/api/shopItems/" + id);
  },
  // Saves a bshopItem to the database
  saveShopItem: function(shopItemData) {
    return axios.post("/api/shopItems", shopItemData);
  }
};