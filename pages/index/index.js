const loading = require("../../behavior/loading");
Page({
  behaviors: [loading],
  data: {
    list: [
      {
        src: "../page/src/image/earth.png",
        desc: "描述1",
      },
      {
        src: "../../src/image/earth.png",
        desc: "描述2",
      },
    ],
  },
  complete(event) {
    this.closeLoading();
  },
  onLoad() {
    this.showLoading();
  },
  onShow() {
    this.setData({
      progress: 1,
    });
  },
});
