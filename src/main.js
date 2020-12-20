import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Element from 'element-ui';
import firebase from 'firebase';
import firebaseConfig from '../src/config/firebaseConfig';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Element);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
