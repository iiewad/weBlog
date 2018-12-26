const wxParser = require('../../wxParser/index');

Component({
  properties: {
    s_id: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        console.log('newVal:' + newVal)
        this.setData({ id: newVal })
        this.articleDetail()
      }
    }
    
  },

  data: {
    id: null,
    article: ''
  },

  methods: {
    articleDetail: function () {
      var id = this.data.id;
      var _that = this;
      wx.getStorage({
        key: 'posts',
        success: function (res) {
          var article = res.data[id];
          wxParser.parse({
            bind: 'richText',
            html: article.content,
            target: _that,
            enablePreviewImage: false, // 禁用图片预览功能
            tapLink: (url) => { // 点击超链接时的回调函数
              // url 就是 HTML 富文本中 a 标签的 href 属性值
              // 这里可以自定义点击事件逻辑，比如页面跳转
              wx.navigateTo({
                url
              });
            }
          });
          _that.setData({
            article: article
          })
        },
      })
    }
  },

  attached: function (ele) {
    //console.log(ele)
  },
})
