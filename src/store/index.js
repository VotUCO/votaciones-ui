/* eslint-disable */

import { createStore } from "vuex";

export default createStore({
  state: {
    logged: false,
    token: null,
  },
  getters: {
    getToken(state){
      return state.token;
    },
    getLogged(state){
      return state.logged;
    }
  },
  mutations: {
    setToken(state, token){ 
      state.token = token;
      return state.token;
    },
    setLogged(state, value){
      state.logged = value;
      return state.logged;
    },
  },
  actions: {},
  modules: {},
});
