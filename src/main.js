import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'

import 'element-plus/theme-chalk/index.css' 

import App from './App.vue'
// import './assets/styles/font.css'; // 引入全局样式文件
const app = createApp(App)

app.use(router);
app.use(ElementPlus)
app.mount('#app')
