import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import '@/assets/css/global.css'
import router from './router'
import MyHttpServer from './plugins/http.js'
import TreeTable from 'vue-table-with-tree-grid'

Vue.use(MyHttpServer)

Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
