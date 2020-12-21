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
      let arreglo = [];
      db.collection('juguetes').onSnapshot(resp => {
        console.log(arreglo);
        resp.forEach(el => {
          arreglo.push({
            code: el.data().code,
            name: el.data().name,
            stock: el.data().stock,
            price: el.data().price,
            id: el.id
          })
        });
        commit('cambiarJuguetes', arreglo);
      });
    },
    agregarJuguetes(context, data) {
      db.collection('juguetes').add({
        code: data.code,
        name: data.name,
        stock: data.stock,
        price: data.price,
      }).then(resp => {
        console.log(resp);
      });    
    },
    eliminarJuguetes(context, id) {
      db.collection('juguetes').doc(id).delete().then(() => {
        console.log('producto eliminado');
      }).catch(error => {
        console.log(error);
      });
    }
  }
})
