import axios from "axios";

export default {
  ///////////// Shop List API ////////////
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
  // Saves a shopItem to the database
  saveShopItem: function (shopItemData) {
    console.log("shopItemData", shopItemData);
    return axios.post("/api/shopItems", shopItemData);
  },  
  // Gets all shopLists
  getShopLists: function () {
    return axios.get("/api/shopLists");
  },
  // Saves a shopList to the database
  saveShopList: function (shopListData) {
    console.log("shopListData", shopListData);
    return axios.post("/api/shopLists", shopListData);
  },

  ////////// Family Info API ////////////
  // Gets all familyInfos
  getFamilyInfos: function () {
    return axios.get("/api/familyInfos");
  },
  // Gets the familyInfo with the given id
  getFamilyInfo: function (id) {
    return axios.get("/api/familyInfos/" + id);
  },
  newFamilyInfo: function (data) {
    console.log(data.category)
    console.log(data.dataText)
    return axios.post("/api/familyInfos", data);
  },
  updateFamilyInfo: function (familyInfoData) {
    return axios.put("/api/familyInfos/" + familyInfoData.id, familyInfoData);
  },
  // Deletes the familyInfo with the given id
  deleteFamilyInfo: function (id) {
    return axios.delete("/api/familyInfos/" + id);
  },
  // Saves a familyInfo to the database
  saveFamilyInfo: function (familyInfoData) {
    return axios.post("/api/familyInfos", familyInfoData);
  }
};
