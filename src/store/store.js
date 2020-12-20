import Vue from 'vue';
import Vuex from 'vuex';
// import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: []
  },
  getters:{
    mostrarJuguetes(state) {
      return state.juguetes;
    }
  },
  mutations: {
    cambiarJuguetes(state, arreglo) {
      state.juguetes = arreglo;
    }
  },
  actions: {
  }
})
