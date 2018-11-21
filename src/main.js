import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false
/* eslint-disable no-new */

import Vuetify from 'vuetify'
Vue.use(Vuetify,{
	theme: {
	 primary: '#ff6d00'
	}
})

import 'vuetify/dist/vuetify.min.css'

export const bus = new Vue();
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
