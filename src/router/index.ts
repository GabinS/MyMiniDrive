import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'My Mini Drive'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/my-files',
    name: 'MyFiles',
    meta: {
      title: 'My Mini Drive'
    },
    component: () => import('@/views/MyFiles.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
