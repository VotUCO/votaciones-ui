/* eslint-disable */

import { createStore } from "vuex";

export default createStore({
  state: {
    logged: false,
    accessToken: null,
    refreshToken: null,
  },
  getters: {
    getRefreshToken(state){
      return state.refreshToken;
    },
    getLogged(state){
      return state.logged;
    },
    getAccessToken(state){
      return state.accessToken;
    }
  },
  mutations: {
    setRefreshToken(state, token){ 
      state.token = token;
      return state.token;
    },
    setLogged(state, value){
      state.logged = value;
      return state.logged;
    },
    setAccessToken(state, value){
      state.accessToken = value;
      return state.accessToken;
    }
  },
  actions: {},
  modules: {},
});
