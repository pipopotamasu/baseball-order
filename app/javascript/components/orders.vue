<template>
  <div id="orders-content">
    <div class="input-form">
      <el-button type="primary" @click="addOrder">Add Order</el-button>
    </div>

    <div class="orders-box">
      <template v-for="(order, i) in orders">
        <order :order="order"></order>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Order from './order.vue'
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
      members: [],
      orders: [],
      value: 'DH'
    }
  },
  components: {
    Order
  },
  created: function() {
    this.fetchMembers();
  },
  methods: {
    addOrder: function() {
      Vue.set(this.orders, this.orders.length, { id: this.orders.length + 1, field_members: [], non_field_members: this.members });
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
