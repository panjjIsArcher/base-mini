const loading = require("../../behavior/loading");
Page({
  behaviors: [loading],
  onShow() {
    this.setData({
      progress: 0.1,
      show: true
    })

  }
})