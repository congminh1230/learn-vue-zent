import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../components/bai8/testOne'),
  // },
  // {
  //   path: '/api',
  //   name: 'api',
  //   component: () => import('../components/bai8/testOne'),
  // },
  {
    path: '/sfdsfs',
    name: 'home',
    component: () => import('../components/Bai4.1/HomePage.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileHome.vue')
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
    path: '/test1/',
    name: 'test1',
    component: () => import('../components/bai6/testVue1.vue')
    
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/Bai7.1/listCart.vue')
    
  },
  {
    path: '/cart2',
    name: 'cart2',
    component: () => import('../components/Bai7.2/ExerciseOne.vue')
    
  },
  {
    path: '/test2',
    name: 'setting',
    component: () => import('../components/bai6/testVue2.vue')
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
