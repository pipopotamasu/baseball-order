<template>
  <div id="orders">
    <div class="input-form">
      <el-button type="primary" @click="addGame">Add Game</el-button>
    </div>

    <div class="games">
      <template v-for="(game, i) in games">
        <div class="game">
          <div class="game-order inline-box">
            <el-table :data="tableData">
              <el-table-column :label="`Game ${ i + 1 }`" class-name="table-name">
                <el-table-column prop="batting_order" label="#" width="30">
                </el-table-column>
                <el-table-column prop="position" width="100" label="Position">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="150">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>

          <div class="members inline-box">
            <el-table :data="members">
              <el-table-column :label="`Game ${ i + 1 }`" class-name="hidden-table-header">
                <el-table-column prop="name" label="Members" width="150">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
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
      value: '',
      tableData: [{
            batting_order: 1,
            position: 1,
            name: 'Tom'
          }, {
            batting_order: 2,
            position: 2,
            name: 'Tom'
          }, {
            batting_order: 3,
            position: 3,
            name: 'Tom'
          }, {
            batting_order: 4,
            position: 4,
            name: 'Tom'
          }]
    }
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
