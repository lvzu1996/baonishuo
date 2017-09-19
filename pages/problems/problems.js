// problems.js
Page({
  data: {
    problems: [
      {
        title: '包你彪-语音口令怎么玩?',
        explain: '你可以设置一个带奖励的语音口令，好友说对口令才能领到奖励',
        flag: false
      }, {
        title: '我支付了但没有发出去?',
        explain: '请在主页的【我的记录】中找到相应的记录，点击进入详情后点击【去转发】可把口令转发给好友或群，你也可以生成朋友圈分享图后发朋友圈',
        flag: false
      }, {
        title: '好友可以转发我的口令吗？',
        explain: '可以的，您分享给好友或者转发到微信群的语音口令，其他好友均可再次转发',
        flag: false
      }, {
        title: '发口令会收取服务费吗？',
        explain: '发语音口令会收取8%的服务费',
        flag: false
      }, {
        title: '未领取的金额会怎样处理？',
        explain: '未领取的金额将于24小时后退至包你说小程序余额；同时，未领取金额的服务费也将退回90%',
        flag: false
      }, {
        title: '如何提现到微信钱包？',
        explain: '在主页的【余额提现】或详情页的【去提现】均可跳转至余额提现页面进行提现，提现金额每次至少一元，每天至多提现3次',
        flag: false
      }, {
        title: '提现会收取服务费吗？多久到账？',
        explain: '提现不收取服务费；申请提现后会在1-5个工作日内转账到您的微信钱包',
        flag: false
      }, {
        title: '如何联系客服？',
        explain: '您可以点击本页面下方的聊天小图标来联系我们的在线客服；您也可以拨打我们的客服电话：000000-0000',
        flag: false
      },

    ],
    //列表处于关闭状态，class为flod，展开状态class为extend
    itemicon: 'imgs/itemicon.png',
    itemicon_press: 'imgs/itemicon_press.png',
    contacticon: 'imgs/contacticon.png'
  },
  bindExplainTap: function(e) {
    var that = this
    let currentId = e.currentTarget.id  //当前点击的view的id
    // 提前把对象准备好，来改变data中数组对象的某个元素的属性
    let str="problems["+currentId+"].flag"
    let param={}
    let itemflag = that.data.problems[currentId].flag
    itemflag = itemflag ? itemflag = false : itemflag = true
    param[str]=itemflag
    that.setData(param)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
