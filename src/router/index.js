import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Article from "../views/Article.vue";
import AuthorProfile from "../views/AuthorProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/authorProfile",
    name: "AuthorProfile",
    component: AuthorProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
