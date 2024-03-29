/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VihView from '../views/VihView.vue'
import HepatitisB from '../views/HepatitisBView.vue'
import gestantesView from '@/views/gestantesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: gestantesView
  },
  {
    path: '/vihList',
    name: 'vihList',
    component: () => import(/* webpackChunkName: "about" */ '@/views/VihListView.vue')
  },
  {
    path: '/vih/:idGCtrl',
    name: 'vih',
    component: VihView,
    props: (route) => ({ idGCtrl: route.params.idGCtrl }),
    meta: { hideParams: true }
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
    path: '/gestanteCtrl/:userId',
    name: 'gestanteCtrl',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/gestanteCtrlView.vue'),
    props: (route) => ({ userId: route.params.userId }),
    meta: { hideParams: true }
  },
  {
    path: '/hepatitisb/:idGCtrl',
    name: 'hepatitisb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/HepatitisBView.vue'),
    props: (route) => ({ idGCtrl: route.params.idGCtrl }),
    meta: { hideParams: true }
  },
  {
    path: '/chagas/:idGCtrl',
    name: 'chagas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/chagasView.vue'),
    props: (route) => ({ idGCtrl: route.params.idGCtrl }),
    meta: { hideParams: true }
  },
  {
    path: '/sifilis/:idGCtrl',
    name: 'sifilis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/sifilisView.vue'),
    props: (route) => ({ idGCtrl: route.params.idGCtrl }),
    meta: { hideParams: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//router.beforeEach((<any>window).VueUtils.RouterBeforeEach);

export default router
