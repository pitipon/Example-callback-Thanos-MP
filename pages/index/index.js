//index.js
//获取应用实例
const app = getApp()

const mock = require('./mock')

const path = require('../../commons/apiPaths')

Page({
  data: {
    items: []
  },
  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant;

    wx.navigateTo({
      url: `/pages/show/show?id=${restaurant.id}`
    });
  },
  onLoad: function () {
    this.fetchItems(path.getAllRestaurants)
  },
  fetchItems: function(url) {
    let that = this

    wx.request({
      url: url,
      success: function(res) {
        that.setData({restaurants:res.data.restaurants})
      }
    })
  }
})
