import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from "./components/Svglcon.vue"
import 'element-plus/theme-chalk/index.css' 
import App from './App.vue'
import './assets/fonts/DingTalk_JinBuTi.ttf';
// import './assets/styles/font.css'; // 引入全局样式文件
const app = createApp(App)

app.use(router);
app.use(ElementPlus)
app.component("svg-icon",SvgIcon)
app.mount('#app')
