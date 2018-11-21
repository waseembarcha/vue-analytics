import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations';
Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		drawer:null
	},

	mutations
});