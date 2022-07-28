import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/AdminLayout.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginLayout.vue')
    
  },
  {
    path: '/reset/password',
    name: 'resetPassword',
    component: () => import('../views/ResetPassword.vue')
    
  },
  {
    path: '/statistical',
    name: 'statistical',
    component: () => import('../views/Statistical.vue')
    
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
