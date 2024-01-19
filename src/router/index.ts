/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VihView from '../views/VihView.vue'
import HepatitisB from '../views/HepatitisBView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: VihView
  },
  {
    path: '/gestantes',
    name: 'gestantes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/gestantesView.vue')
  },
  {
    path: '/hepatitisB',
    name: 'hepatitisB',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/HepatitisBView.vue')
  },
  {
    path: '/chagas',
    name: 'chagas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/chagasView.vue')
  },
  {
    path: '/sifilis',
    name: 'sifilis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/sifilisView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//router.beforeEach((<any>window).VueUtils.RouterBeforeEach);

export default router
