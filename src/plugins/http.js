// 插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 添加实例方法
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  //   请求的时候挂载token
  axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    //   固定写法，必须return config
    return config
  })
  Vue.prototype.$http = axios
}

export default MyHttpServer
