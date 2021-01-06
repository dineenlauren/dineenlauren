import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { LayoutPlugin } from 'bootstrap-vue';

import { NavbarPlugin } from 'bootstrap-vue';
import { VBScrollspyPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';
import { EmbedPlugin } from 'bootstrap-vue';
Vue.use(EmbedPlugin);
// Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
import { ImagePlugin } from 'bootstrap-vue';
Vue.use(ImagePlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(NavbarPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
