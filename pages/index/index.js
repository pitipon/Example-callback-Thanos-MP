//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    items: []
  },
  onLoad: function () {
    
  },
  takePhoto: function() {
    console.log("take photo")
    wx.chooseImage({
      count: 1, 
      sizeType: ['original'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
       
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  }
})
