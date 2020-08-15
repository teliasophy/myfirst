# 登录/退出

### token

- 利用 sessionStorage 存储

### 导航路由守护--->访问权限 beforeEach()

`javascript`// 为路由对象，添加 beforeEach 导航守卫
router.beforeEach((to,from,next) => {
//如果用户访问的登录页，直接放行
if(to.path === '/login') return next()
//从 sessionStorage 中获取到保存的 token 值
const tokenStr = window.sessionStorage.getItem('token')
//没有 token，强制跳转到登录页
if(!tokenStr) return next('/login')
//所有通过后，放行
next()
})`javascript`

### 退出

清除 token 即可
