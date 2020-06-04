// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: '<div class="grid_c1 feed-tab-wrapper feed-tab-wrapper--fixed "><ul class="feed-tab"><li id="feedTab0" class="feed-tab__item feed-tab__item--active" clstag="h|keycount|feed|top_01" tabindex="0" aria-label="精选 猜你喜欢" role="tab" aria-selected="true" aria-controls="feedContent0"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">精选</span></div><div class="feed-tab__item-desc">猜你喜欢</div><div class="feed-tab__item-gap"></div></li><li id="feedTab1" class="feed-tab__item" clstag="h|keycount|feed|top_02" tabindex="-1" aria-label="智能先锋 大电器城" role="tab" aria-controls="feedContent1"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">智能先锋</span></div><div class="feed-tab__item-desc">大电器城</div><div class="feed-tab__item-gap"></div></li><li id="feedTab2" class="feed-tab__item" clstag="h|keycount|feed|top_03" tabindex="-1" aria-label="居家优品 品质生活" role="tab" aria-controls="feedContent2"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">居家优品</span></div><div class="feed-tab__item-desc">品质生活</div><div class="feed-tab__item-gap"></div></li><li id="feedTab3" class="feed-tab__item" clstag="h|keycount|feed|top_04" tabindex="-1" aria-label="超市百货 百货生鲜" role="tab" aria-controls="feedContent3"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">超市百货</span></div><div class="feed-tab__item-desc">百货生鲜</div><div class="feed-tab__item-gap"></div></li><li id="feedTab4" class="feed-tab__item" clstag="h|keycount|feed|top_05" tabindex="-1" aria-label="时尚达人 美妆穿搭" role="tab" aria-controls="feedContent4"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">时尚达人</span></div><div class="feed-tab__item-desc">美妆穿搭</div><div class="feed-tab__item-gap"></div></li><li id="feedTab5" class="feed-tab__item" clstag="h|keycount|feed|top_06" tabindex="-1" aria-label="进口好物 京东国际" role="tab" aria-controls="feedContent5"><div class="feed-tab__item-title"><span class="feed-tab__item-title-text">进口好物</span></div><div class="feed-tab__item-desc">京东国际</div></li></ul></div>',
    ischecked: false,
    text: '我是我的页面',
    num: 8,
    gender: '',
    checked_list:'',
    list_goods: [
      {
        id: 0,
        name: '🍎',
        value: 'apple'
      },
      {
        id: 1,
        name: '🍇',
        value: 'prup'
      },
      {
        id: 2,
        name: '🍍',
        value: 'boluo'
      },
      {
        id: 3,
        name: '🥚',
        value: 'age'
      },
      {
        id: 4,
        name: '🍌',
        value: 'banner'
      },
    ],
    list_hero: [
      { id: 1001, name: 'lucy', age: 15 },
      { id: 1002, name: 'jack', age: 16 },
      { id: 1003, name: 'maee', age: 17 },
      { id: 1004, name: 'dome', age: 14 },
      { id: 1005, name: 'coki', age: 11 },
    ],
    Person: {
      name: "lengtaitang",
      age: 45,
      tel: "155200000125",
      addess: "四川成都",
      job: 'web前端工程师'
    },
  },
  //获取用户的手机号码信息
  bindgetPhoneNumber(e) {
    console.log(e);
  }
  ,
  //获取用户个人信息
  bindgetUserInfo(e) {
    console.log(e);

  },

  handleIpt(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },
  //加减按钮事件
  handletap(e) {
    console.log(e);
    const opnum = e.currentTarget.dataset.op
    console.log(opnum);
    this.setData({
      num: this.data.num + opnum
    })
  },
  //单选框触发事件
  handleChange(e) {
    let gender = e.detail.value
    this.setData({
      gender
    })

  }
  ,
  //复选框触发事件
  handledoods(e) {
    console.log(e);
    let checked_list = e.detail.value
    this.setData({
      checked_list
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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