//app.js
App({
  // -> 应用第一次启动就会触发的事件，常用来获取用户信息
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 应用的生命周期
  // 1.-> 应用在第一次启动的时间久会触发的事件
  // 一般会在app.js里面用 用户在启动应用会登录
  onLaunch: function () {
    console.log('e');
  },
  // 2. onshow 对应用被用户看到时会触发
  onShow() {
    //对应用的数据或者页面效果 重置
    console.log("onShow");

  },
  // 3. onHide 对应用被用户隐藏时会触发
  onHide() {
    // 暂停或者清除定时器
    console.log("onHide");

  },
  // 4.应用的代码发生了保存的时候 就会触发
  onerror(Err) {
    // 在应用发生代码保存的时候，收集用户的错位信息，
    //  通过异步请求，将错误的信息发送到后台去
    console.log('Err');
  }
  ,
  // 5.页面找不大就会触发
  // 应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound() {
    console.log("onPageNotFound");
  }
  ,
  globalData: {
    userInfo: null
  }
})