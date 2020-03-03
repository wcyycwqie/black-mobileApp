import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Layout from '../views/layout'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/question',
        name: 'Question',
        component: () => import('@/views/question')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
