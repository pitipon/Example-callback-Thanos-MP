// pages/show/show.js
const path = require('../../commons/apiPaths')

Page({

  data: {
  
  },

  onLoad: function (options) {
    this.setData({restaurantId: options.id})
    this.fetchRestaurant(path.getRestaurant, this.data.restaurantId)
  },

  fetchRestaurant: function (url, id) {
    let that = this

    wx.request({
      url: url + id,
      success: function(res) {
        that.setData({restaurant:res.data})
        console.log(8888,res.data)
      }
    })
  }
})