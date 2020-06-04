// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */

  methods: {
    handleItemTap(e) {
      // console.log(e);
      //  -> 获取被点击的索引
      let  index = e.currentTarget.dataset.op
      console.log(index);
      // -> 触发父组件中的自定义事件  提示传递数据给父组件
      this.triggerEvent("itemChange",{index})
      // -> 获取原数组    
    //   let { tabs } = this.data
    //   // console.log(tabs);
    //   //  ->给每一个循环选择中的属性改为true
    //   tabs.forEach((item, i) => {
    //     i == index ? item.isActive = true : item.isActive = false
    //     this.setData({
    //       tabs
    //     })
    //   });
    }

  },
})
