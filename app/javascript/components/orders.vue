<template>
  <div id="orders">
    <div class="input-form">
      <el-button type="primary" @click="addGame">Add Game</el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      games: []
    }
  },
  methods: {
    addGame: function() {
      Vue.set(this.games, this.members.games, { id: this.members.length + 1, order: this.members.length });
    }
  }
}
</script>
