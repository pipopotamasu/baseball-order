import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../components/orders.vue'
import Members from '../components/members.vue'
import Element from 'element-ui'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  { path: '/orders', component: Orders },
  { path: '/members', component: Members }
]

const router = new VueRouter({
  routes
});

// bootstrap the demo
var app = new Vue({
  el: '#app',
  router,
  data: function(){
    return {
      activeName: ''
    }
  },
  methods: {
    swichTab: function() {
      switch(this.activeName) {
        case 'orders':
          this.$el.querySelector('#orders').click()
          break;
        case 'members':
          this.$el.querySelector('#members').click()
          break;
      }
    }
  }
})
