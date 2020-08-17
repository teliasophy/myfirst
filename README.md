# 登录/退出

### token

- 利用 sessionStorage 存储

### 导航路由守护--->访问权限 beforeEach()

```javascript
// 为路由对象，添加 beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  //如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  //从 sessionStorage 中获取到保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有 token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  //所有通过后，放行
  next()
})
```

### 退出

清除 token 即可

# git 操作

## 查看分支 ---git branch

## 创建分支 ---git checkout -b branch_name

## 推送更新 ---git add .

## 合并分支到 maser --- git merge branch_name

## commit 更新---git commit -m "comments"

## push 更新 --- git push

### 如果仓库没有分支 --- git push -u origin branch_name
