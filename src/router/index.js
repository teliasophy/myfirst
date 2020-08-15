import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { name: 'login', path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  /**
   * to:将要访问的路径
   * from：原来的路径
   * next：函数，放行进入
   */
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
