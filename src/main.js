import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import '@/assets/css/global.css'
import router from './router'
import MyHttpServer from './plugins/http.js'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器及相关css
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(MyHttpServer)

Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

Vue.use(VueQuillEditor)

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDay() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
