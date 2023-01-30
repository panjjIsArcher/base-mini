
Component({
  properties: {
    progress: {
      value: 0,
      type: Number
    }
  },
  data: {
    imageCompleteProgress: 0,
    clipPath: ''
  },
  methods: {
    complete(progress = 0): string {
      const completeProgress: number = progress * 100;
      console.log(completeProgress)
      const clipPath: string = `inset(0 0 ${completeProgress}%  0);`
      return clipPath;
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        clipPath: this.complete(this.data.imageCompleteProgress)
      })

    }
  },
  observers: {
    progress(progress) {
      if (progress >= 1) {
        return
      }
      this.setData({
        clipPath: this.complete(progress),
        imageCompleteProgress: progress
      })

    }
  }
})
