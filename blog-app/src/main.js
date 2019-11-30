import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {name:'index', path:'/', redirect: '/posts'},
  {name:'posts', path:'/posts', component: AppPosts},
  {name: 'view', path: '/posts/:id', component: SinglePost},
  {name: 'add', path: '/add', component: AddPost},
  {name: 'edit', path: '/edit/:id', component: AddPost}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
