import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex);

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
    traerData({commit}) {
      db.collection('juguetes').onSnapshot(resp => {
        console.log(arreglo);
        let arreglo = [];
        resp.forEach(el => {
          arreglo.push({
            code: el.data().code,
            name: el.data().name,
            stock: el.data().stock,
            price: el.data().price,
            id: el.data().id
          })
        });
        commit('cambiarJuguetes', arreglo);
      });
    }
  }
})
