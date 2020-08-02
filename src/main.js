import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import '@/assets/css/reset.css'
import router from './router'
import MyHttpServer from './plugins/http.js'

Vue.use(MyHttpServer)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
