const loading = require("../../behavior/loading");
import { navigatoteTo } from "../../util/index";
import { PATH } from "../../src/constants/path";
Page({
  behaviors: [loading],
  data: {
    active: {},
    effect: "",
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
  async change(event) {
    const item = event.currentTarget.dataset.item;
    const { id } = item;
    if (id === this.data.active.id) {
      navigatoteTo(PATH.GIS);
      return;
    }
    this.setData({
      active: item,
      effect: 'text-focus-out'
    });
    await new Promise(r => setTimeout(r, 600))
    this.setData({
      effect: 'text-focus-in'
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
