module.exports = Behavior({
  data: {
    show: true,
    progress: 0,
  },
  methods: {
    closeLoading() {
      this.setData({
        show: false,
      });
    },
    showLoading() {
      this.setData({
        show: true,
      });
    },
  },
});
