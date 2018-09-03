import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Formulaire from './components/Formulaire.vue'
import MovieListPage from './components/MovieListPage.vue'
import VueSocket from 'vue-socket.io'

Vue.use(VueSocket, 'http://localhost:5010')
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: MovieListPage },
  { path: '/formulaire/:id?', component: Formulaire }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
