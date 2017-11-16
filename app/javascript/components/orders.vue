<template>
  <div id="orders-content">
    <div class="input-form">
      <el-button type="primary" @click="ADD_ORDER">Add Order</el-button>
    </div>

    <div class="orders-box">
      <template v-for="(order, i) in baseball_order.orders">
        <order :order="order"></order>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as types from '../store/mutation_types/baseball_order';
import Vue from 'vue';
import Order from './order.vue'

export default {
  computed: {
    ...mapState(['baseball_order']),
  },
  components: {
    Order
  },
  created: function() {
    this.FETCH_MEMBERS();
  },
  methods: {
    ...mapActions([
        types.FETCH_MEMBERS,
        types.ADD_ORDER
    ]),
  }
}
</script>
