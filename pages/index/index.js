const loading = require("../../behavior/loading");
import { navigatoteTo } from "../../util/index"
Page({
  behaviors: [loading],
  data: {
    active: {},
    list: [
      {
        src: `url("../../src/image/earth.png")`,
        desc: "描述3",
        id: 1,
      },
      {
        src: `url("../../src/image/earth.png")`,
        desc: "描述1",
        id: 2,
      },
      {
        src: `url("../../src/image/earth.png")`,
        desc: "描述2",
        id: 3,
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
      navigatoteTo();
      return;
    }
    this.setData({
      active: item,
    });
  },
  onLoad() {
    this.showLoading();

    const index = Math.floor(this.data.list.length / 2);
    this.setData({
      active: this.data.list[index],
    });
  },
  onShow() {
    this.setData({
      progress: 1,
    });
  },
});
