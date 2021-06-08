import { createApp } from "vue";
// import Vue from "vue";
// import BootstrapVue from "bootstrap-vue"
import app from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from 'js-cookie';
import axios from "axios";
// import ElementUI from 'element-ui';
// import { ElementTiptapPlugin } from 'element-tiptap';
// import 'element-ui/lib/theme-chalk/index.css';
// import this package's styles
// import 'element-tiptap/lib/index.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";


var token = Cookies.get('credential')
axios.defaults.baseURL = "http://apiProject.stg";
axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Vue.use(BootstrapVue);
// Vue.use(ElementTiptapPlugin, {
//   // lang: "zh",
//   // spellcheck: false,
// });

createApp(app).use(store).use(router).provide('Cookies', Cookies).mount("#app");


// App.config.globalProperties.$filters = {
//   currencyUSD(value) {
//     return '$' + value
//   }
// }
