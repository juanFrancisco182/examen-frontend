import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../components/products/products_view.vue'
import UsersView from '../components/users/users_view.vue'
import MercadoLibre from '../components/mercadolibre/mercado_libre_view.vue'
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
    path: '/mercado',
    name: 'Mercado Libre',
    component: MercadoLibre
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
