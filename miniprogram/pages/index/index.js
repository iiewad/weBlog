Page({
  onLoad: function() {
  },

  sub_func: function (e) {
    var id = e.detail.data;
    console.log(id);
    wx.navigateTo({
      url: '/pages/show/show?id=' + id
    })
  },
})