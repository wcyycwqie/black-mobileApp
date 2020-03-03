import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Layout from '../views/layout'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home', // url重定向到 /home
    children: [{
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/question',
        name: 'Question',
        component: () => import('@/views/question')
      },
      {
        path: '/video',
        component: () => import('@/views/video')
      },
      {
        path: '/user',
        component: () => import('@/views/user')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
