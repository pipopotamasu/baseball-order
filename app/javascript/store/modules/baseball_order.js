import * as types from '../mutation_types/baseball_order'
import { positions } from '../constants'
import Vue from 'vue'
import axios from 'axios'

// set csrf token by getting that from dom.
if (document.getElementsByName('csrf-token')[0]) {
  let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
}

export default {
  state: {
    members: [],
    orders: []
  },
  // getters: getters,
  actions: {
    [types.FETCH_MEMBERS] ({ commit }) {
      axios.get('/members/all').then((response) => {
        commit({
            type: types.FETCH_MEMBERS,
            members: response.data
        })
      }).catch((e) => {
        alert('Faild to get data.');
        console.log(e);
      });
    },
    [types.ADD_ORDER] ({ commit, state }) {
      const game = { id: state.orders.length + 1, starting_members: [], sub_members: state.members, positions: positions }
      commit({
          type: types.ADD_ORDER,
          game: game
      });
    },
  },
  mutations: {
    [types.FETCH_MEMBERS] (state, payload) {
      state.members = payload.members;
    },
    [types.ADD_ORDER] (state, payload) {
      Vue.set(state.orders, state.orders.length, payload.game);
    },
  }
};
