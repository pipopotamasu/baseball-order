<template>
  <div id="orders-content">
    <div class="input-form">
      <el-button type="primary" @click="addOrder">Add Order</el-button>
    </div>

    <div class="orders-box">
      <template v-for="(order, i) in orders">
        <div class="order-box">
          <div class="game-order inline-box">
            <table cellspacing="0" cellpadding="0" border="0">
              <thead>
                <th>#</th>
                <th>Position</th>
                <th>Name</th>
              </thead>
              <draggable v-model="order.field_members" :element="'tbody'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <template v-for="(member, k) in order.field_members" class="member">
                  <tr>
                    <td>{{ k + 1 }}</td>
                    <td>
                      <el-select v-model="member.position" placeholder="Select">
                      <el-option
                        v-for="item in positions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    </td>
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
              <draggable v-model="order.non_field_members" :element="'div'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
                <div v-for="member in order.non_field_members" class="member">
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
      members: [],
      orders: [],
      positions: [
        {
          value: 'P',
          label: 'P'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'FB',
          label: 'FB'
        },
        {
          value: 'SB',
          label: 'SB'
        },
        {
          value: 'TB',
          label: 'TB'
        },
        {
          value: 'SS',
          label: 'SS'
        },
        {
          value: 'LF',
          label: 'LF'
        },
        {
          value: 'CF',
          label: 'CF'
        },
        {
          value: 'RF',
          label: 'RF'
        },
        {
          value: 'DH',
          label: 'DH'
        },
      ],
      value: 'DH'
    }
  },
  components: {
    Draggable
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
