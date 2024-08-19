/* eslint-disable */

import { createStore } from "vuex";

export default createStore({
  state: {
    logged: false,
    accessToken: "null",
    refreshToken: null,
    rol: null,
    name: null,
  },
  getters: {
    getRefreshToken(state) {
      return state.refreshToken;
    },
    getLogged(state) {
      return state.logged;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRol(state) {
      return state.rol;
    },
    getName(state) {
      return state.name;
    },
  },
  mutations: {
    setRefreshToken(state, token) {
      state.token = token;
      return state.token;
    },
    setLogged(state, value) {
      state.logged = value;
      return state.logged;
    },
    setAccessToken(state, value) {
      state.accessToken = value;
      return state.accessToken;
    },
    setRol(state, value) {
      state.rol = value;
      return state.rol;
    },
    setName(state, value) {
      state.name = value;
      return state.name;
    },
  },
  actions: {},
  modules: {},
});
