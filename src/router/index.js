import { createRouter, createWebHistory } from "vue-router";
import Cookies from 'js-cookie';
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Article from "../views/Article.vue";
import AuthorProfile from "../views/AuthorProfile.vue";
import adminHome from "../views/admin/Home.vue";
import AddArticle from "../views/admin/AddArticle.vue";
import UsersPendingArticle from "../views/admin/UsersPendingArticle.vue";
import MyPendingArticles from "../views/admin/MyPendingArticles.vue";
import EditArticle from "../views/admin/EditArticle";


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
    async beforeEnter(to, from, next) {
      try {
        var credential = await Cookies.get("credential");
        if (credential) {
          next({
            name: "Home", // back to safety route //
            query: { redirectFrom: to.fullPath }
          })
        }
        next()
      } catch (e) {
        next({
          name: "login", // back to safety route //
          query: { redirectFrom: to.fullPath }
        })
      }
      // if (Cookies.get(Credential) == true) {
      //   next({
      //     name: '/',
      //     query: { redirectFrom: to.fullPath }
      //   })
      // }
    }
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
  {
    path: "/admin",
    name: "admin",
    component: adminHome,
  },
  {
    path: "/admin/addArticle",
    name: "addArticle",
    component: AddArticle,
  },
  {
    path: "/admin/usersPendingArticle",
    name: "UsersPendingArticle",
    component: UsersPendingArticle,
  },
  {
    path: "/admin/myPendingArticles",
    name: "MyPendingArticles",
    component: MyPendingArticles,
  },
  {
    path: "/admin/editArticle",
    name: "EditArticle",
    component: EditArticle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
