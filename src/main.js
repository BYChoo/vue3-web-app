import { createApp } from 'vue'
import App from './App.vue'
// import 'amfe-flexible'

// 组合请求库
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App)
  .use(VueAxios, axios)
  .use(Vant)
  .mount('#app')
