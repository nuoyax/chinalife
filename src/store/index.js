import Vue from "vue"
import  Vuex from "vuex"

Vue.use(Vuex)
const  store=new Vuex.Store({
  state:{
    count:1,
    result:false
  },
  getters:{
    getStateAccount(){
      return this.state.count
    }
  }, mutations:{
    add(state){
      state.count+=1
      if (state.count>=10){
        state.result=true
      }
    },
    dec(state){
      state.count-=1
      if (state.count<=0){
        state.result=true
      }
    }

  },actions:{
    addFun(context){
      context.commit("add")
    },
    decFun(context){
      context.commit("dec")
    }
  }



})
export default store
