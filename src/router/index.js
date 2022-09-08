import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../components/products/products_view.vue'
import UsersView from '../components/users/users_view.vue'
const routes = [
  {
    path: '/',
    name: 'Productos',
    component: ProductsView
  },

  {
    path: '/users',
    name: 'Usuarios',
    component: UsersView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
