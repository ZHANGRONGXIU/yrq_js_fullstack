import {
  API_BASE
} from '../../API/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchedList: [],
    id: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.from+" "+options.to);
    var from = options.from;
    var to = options.to;
    var temp = [];
    wx.request({
      url: API_BASE,
      success: (res) => {
        //console.log(res.data.data.trainList);
        for(var i=0;i<res.data.data.trainList.length;i++){
          if (from == res.data.data.trainList[i].from && to == res.data.data.trainList[i].to){
            temp.push(res.data.data.trainList[i]);
          }
        }

        //console.log(this.data.searchedList);
        this.setData({
          searchedList:temp
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})