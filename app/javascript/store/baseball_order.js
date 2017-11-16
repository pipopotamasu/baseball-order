import Vue from 'vue'
import Vuex from 'vuex'
import baseball_order from './modules/baseball_order'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    baseball_order: baseball_order,
  }
});
