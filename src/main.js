import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Formulaire from './components/Formulaire.vue'
import MovieListPage from './components/MovieListPage.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: MovieListPage },
  { path: '/formulaire', component: Formulaire }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
