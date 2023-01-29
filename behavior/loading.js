module.exports =Behavior( {
  data:{
    show:false
  },
  methods:{
    closeLoading(){
       this.setData({
         show:false
       })
    },
    showLoading(){
      this.setData({
        show:true
      })
    }
  }
})