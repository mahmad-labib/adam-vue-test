import { createApp } from "vue";

import app from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from 'js-cookie';
import axios from "axios";


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";


var token = Cookies.get('credential')
axios.defaults.baseURL = "http://apiProject.stg";
axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



createApp(app).use(store).use(router).provide('Cookies', Cookies).mount("#app");
app.config.silent = true

app.prototype.$scrollToTop = () => window.scrollTo(0,0)
