import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/app.vue'
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
  router
})


// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Counter from './components/vuex_practice/counter.vue'
// import TodoApp from './components/vuex_practice/todo_app.vue'
// import Trello from './components/vuex_practice/trello_app.vue'
// import store from './store/vuex_practice';
//
// Vue.use(VueRouter)
//
// const routes = [
//   { path: '/counter', component: Counter },
//   { path: '/todo', component: TodoApp },
//   { path: '/trello', component: Trello },
// ]
//
// const router = new VueRouter({
//   routes
// })
//
// // bootstrap the demo
// var app = new Vue({
//   store,
//   el: '#app',
//   router
// })
