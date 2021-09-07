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
import UsersList from "../views/admin/UsersList";
import EditUser from "../views/admin/EditUser";
import RolesPermissions from "../views/admin/RolesPermissions";
import AddRole from "../views/admin/AddRole";
import EditRole from "../views/admin/EditRole";
import Sections from "../views/admin/Sections";


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
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
  {
    path: "/authorProfile/:id",
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
  {
    path: "/admin/usersList",
    name: "UsersList",
    component: UsersList,
  },
  {
    path: "/admin/editUser",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/admin/RolesPermissions",
    name: "RolesPermissions",
    component: RolesPermissions,
  },
  {
    path: "/admin/AddRole",
    name: "AddRole",
    component: AddRole,
  },
  {
    path: "/admin/EditRole",
    name: "EditRole",
    component: EditRole,
  },
  {
    path: "/admin/Sections",
    name: "Sections",
    component: Sections,
  },
];

// const scrollBehavior = function (to, from, savedPosition) {
//   // document.getElementById("app").scrollIntoView();
//   if (savedPosition) {
//     // savedPosition is only available for popstate navigations.
//     return savedPosition
//   } else {
//     const position = {}

//     // scroll to anchor by returning the selector
//     if (to.hash) {
//       position.selector = to.hash

//       // specify offset of the element
//       if (to.hash === '#anchor2') {
//         position.offset = { y: 100 }
//       }

//       // bypass #1number check
//       if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
//         return position
//       }

//       // if the returned position is falsy or an empty object,
//       // will retain current scroll position.
//       return false
//     }

//     return new Promise(resolve => {
//       // check if any matched route config has meta that requires scrolling to top
//       if (to.matched.some(m => m.meta.scrollToTop)) {
//         // coords will be used if no selector is provided,
//         // or if the selector didn't match any element.
//         position.x = 0
//         position.y = 0
//       }

//       // wait for the out transition to complete (if necessary)
//       this.app.$root.$once('triggerScroll', () => {
//         // if the resolved position is falsy or an empty object,
//         // will retain current scroll position.
//         resolve(position)
//       })
//     })
//   }
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior,
  linkActiveClass: 'active'
});



export default router;
