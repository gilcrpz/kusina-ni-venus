import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from '../views/Homeview.vue'
import Menuview from '../views/Menuview.vue'

const routes = [
  { path: '/', name: 'Home', component: Homeview },
  { path: '/menu', name: 'Menu', component: Menuview }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router