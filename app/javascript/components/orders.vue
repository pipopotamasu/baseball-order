<template>
  <div id="orders">
    <div class="input-form">
      <el-button type="primary" @click="addGame">Add Game</el-button>
    </div>

    <div class="games">
      <template v-for="(game, i) in games">
        <div class="game">
          <!-- <div class="game-order box-card inline-box">
            <el-card>
              <div slot="header">
                <div class="header">#</div>
                <div class="header">Position</div>
                <div class="header">Name</div>
              </div>
              <div v-for="member in members" class="member">
                {{ member.name }}
              </div>
            </el-card>
          </div> -->

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
      tableData: [{ batting_order: 1, position: 6, name: 'Murakami' }
          // {
          //   batting_order: 1,
          //   position: 1,
          //   name: 'Tom'
          // }, {
          //   batting_order: 2,
          //   position: 2,
          //   name: 'Tom'
          // }, {
          //   batting_order: 3,
          //   position: 3,
          //   name: 'Tom'
          // }, {
          //   batting_order: 4,
          //   position: 4,
          //   name: 'Tom'
          // }
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
