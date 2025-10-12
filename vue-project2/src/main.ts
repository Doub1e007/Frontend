// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
// 配置國際化 -- 中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
// 使用中文
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')



