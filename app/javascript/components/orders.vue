<template>
  <div id="orders">
    <div class="input-form">
      <el-button type="primary" @click="addGame">Add Game</el-button>
    </div>

    <div class="games">
      <template v-for="(game, i) in games">
        <div class="game">
          <div class="game-order inline-box">
            <table>
              <thead>
                <th>打順</th>
                <th>ポジション</th>
                <th>名前</th>
              </thead>
              <draggable v-model="orders" :element="'tbody'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <template v-for="(order, i) in orders" class="member">
                  <tr>
                    <td>{{ i + 1 }}</td>
                    <td>{{ order.position }}</td>
                    <td>{{ order.name }}</td>
                  </tr>
                </template>
              </draggable>
            </table>
          </div>

          <div class="members box-card inline-box">
            <el-card>
              <div slot="header">
                <span>Members</span>
              </div>
              <draggable v-model="members" :element="'div'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <div v-for="member in members" class="member">
                  {{ member.name }}
                </div>
              </draggable>
            </el-card>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Draggable from 'vuedraggable'
import axios from 'axios'

// set csrf token by getting that from dom.
if (document.getElementsByName('csrf-token')[0]) {
  let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
}

export default {
  data: function () {
    return {
      games: [{ id: 1 }],
      members: [],
      value: '',
      orders: [
        { batting_order: 1, position: 6, name: 'Tom' },
        { batting_order: 2, position: 7, name: 'Mary' },
      ]
    }
  },
  components: {
    Draggable
  },
  created: function() {
    this.fetchHoge();
  },
  methods: {
    addGame: function() {
      Vue.set(this.games, this.games.length, { id: this.games.length + 1, order: this.games.length, order_ids: [] });
    },
    fetchHoge: function() {
      let self = this;
      axios.get('/members/all').then((response) => {
        self.members = response.data
      }).catch((e) => {
        // console.log(e);
      });
    },
  }
}
</script>
