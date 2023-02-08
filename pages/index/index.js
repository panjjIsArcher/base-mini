const loading = require("../../behavior/loading");
Page({
  behaviors: [loading],
  complete(event) {
    this.closeLoading();
  },
  onShow() {
    this.setData({
      progress: 1,
      show: true,
    });
  },
});
