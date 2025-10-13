import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// 路由实例 -- 管理路径和组件的关系
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/layout/index.vue')
    },
     {
      path: '/index',
      name: 'index',
      component: () => import('../views/index/index.vue')
    },
    {
      path: '/dept',
      name: 'dept',
      component: () => import('../views/dept/index.vue')
    } 
  ]
})

export default router
