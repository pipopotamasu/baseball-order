<template>
  <div id="orders">
    <div class="input-form">
      <el-button type="primary" @click="addGame">Add Game</el-button>
    </div>

    <div class="games">
      <template v-for="(game, i) in games">
        <div class="game">
          <div class="game-order inline-box">
            <table cellspacing="0" cellpadding="0" border="0">
              <thead>
                <th>#</th>
                <th>Position</th>
                <th>Name</th>
              </thead>
              <draggable v-model="orders[i].field_members" :element="'tbody'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <template v-for="(member, k) in orders[i].field_members" class="member">
                  <tr>
                    <td>{{ k + 1 }}</td>
                    <td>{{ member.position }}</td>
                    <td>{{ member.name }}</td>
                  </tr>
                </template>
                <tr class=".ignore-elements">
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </draggable>
            </table>
          </div>

          <div class="members box-card inline-box">
            <el-card>
              <div slot="header">
                <span>Members</span>
              </div>
              <draggable v-model="orders[i].non_field_members" :element="'div'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <div v-for="member in orders[i].non_field_members" class="member">
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
      games: [],
      members: [],
      orders: []
    }
  },
  components: {
    Draggable
  },
  created: function() {
    this.fetchMembers();
  },
  methods: {
    addGame: function() {
      Vue.set(this.orders, this.orders.length, { id: this.orders.length + 1, field_members: [], non_field_members: this.members });
      Vue.set(this.games, this.games.length, { id: this.games.length + 1, order_id: this.orders.length + 1 });
      console.log(this.orders);
    },
    fetchMembers: function() {
      let self = this;
      axios.get('/members/all').then((response) => {
        self.members = response.data
        self.setNonFieldMembers(response.data);
      }).catch((e) => {
        // console.log(e);
      });
    },
    setNonFieldMembers: function(members) {
      this.orders.forEach((order, i) => {
        this.orders[i].non_field_members = members
      });
    }
  }
}
</script>
