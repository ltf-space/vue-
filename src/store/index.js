import Vue from "vue";
// import Vuex from "vuex";
import Vuex from "../vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'小明',
    age:18
  },
  getters:{
    newName(state){
      return `王${state.name}`
    }
  },
  mutations: {
    addAge(state,payload){ 
      state.age+=payload
    }
  },
  actions: {},
  modules: {},
});
