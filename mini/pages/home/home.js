// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: "我是首页",
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },
  // 自定义事件 用来接收子组件传递的数据
  handleItemChange(e) {
    console.log(e);
    // 接收传递过来的index参数
    const { index } = e.detail
    console.log(index);
    let { tabs } = this.data
    // console.log(tabs);
    //  ->给每一个循环选择中的属性改为true
    tabs.forEach((item, i) => {
      i == index ? item.isActive = true : item.isActive = false
      this.setData({
        tabs
      })
    });

  }
})