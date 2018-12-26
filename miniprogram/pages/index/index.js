var plugin = requirePlugin("myPlugin")
Page({
  onLoad: function() {
    plugin.getData()
  },

  sub_func: function (e) {
    var id = e.detail.data;
    console.log(id);
    wx.navigateTo({
      url: '/pages/show/show?id=' + id
    })
  },
})