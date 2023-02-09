const loading = require("../../behavior/loading");
Page({
  behaviors: [loading],
  data: {
    active: {},
    list: [{
      src: "../page/src/image/earth.png",
      desc: "描述3",
      id: 1
    },
    {
      src: "../page/src/image/earth.png",
      desc: "描述1",
      id: 2
    },
    {
      src: "../../src/image/earth.png",
      desc: "描述2",
      id: 3
    },
    ],
  },
  complete() {
    this.closeLoading();
  },
  change(event) {
    const item = event.currentTarget.dataset.item;
    const { id } = item;
    if (id === this.data.active.id) {
      return
    }
    this.setData({
      active: item
    })
  },
  onLoad() {
    this.showLoading();
    // 默认选中第一个list
    this.setData({
      active: this.data.list[0]
    })
  },
  onShow() {
    this.setData({
      progress: 1,
    });
  },
});
