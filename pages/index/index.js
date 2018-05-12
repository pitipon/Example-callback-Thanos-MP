//index.js
//获取应用实例
const app = getApp()

const mock = require('./mock')


Page({
  data: {
    items: []
  },
  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant;

    wx.navigateTo({
      url: `/show/show?id=${restaurant.id}`
    });
  },
  onLoad: function () {
    
   
    this.setData({
      restaurants: mock.default.restaurants
    })


    

  }
})
