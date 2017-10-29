import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/hello.vue'
import Members from '../components/members.vue'
import Element from 'element-ui'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  { path: '/hello1', component: Hello },
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
        case 'hello':
          this.$el.querySelector('#hello').click()
          break;
        case 'members':
          this.$el.querySelector('#members').click()
          break;
      }
    }
  }
})
