const loading = require("../../behavior/loading");
Page({
  behaviors: [loading],
  complete() {
    this.closeLoading()
  },
  onLoad() {
    this.setData({
      progress: 0.1,
      show: false
    })

  }
}) 