import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import router from "../router";

export default createStore({
  state: {
    user: Cookies.getJSON("user"),
    role: Cookies.getJSON("role"),
    article: null,
    route: "",
    message: "",
    users: [],
    pages: [],
    current_article: {},
    pages_info: {
      currentPage: 1,
      lastPage: 1
    },
    last_page: Number,
    activeUser: null,
    activeRole: null,
    userPendingArticles: [],
  },
  mutations: {
    SAVE_USER(state, data) {
      if (data.status == false) {
        return (state.message = data.msg);
      }
      var user = data.user;
      state.user = user;
      Cookies.set("user", user, { expires: 1 });
      state.message = "";
      user.roles.forEach((role) => {
        if (role === "user") {
          state.role = role.name;
          Cookies.set("role", role.name, { expires: 1 });
        } else {
          state.role = "admin";
          Cookies.set("role", "admin", { expires: 1 });
        }
      });
      Cookies.set("credential", user.api_token, { expires: 1 });
      return router.push("/");
    },
    SAVE_ARTICLE(state, article) {
      state.article = article;
    },
    DELETE_USER(state) {
      state.user = null;
      state.role = null;
      Cookies.remove("credential");
      Cookies.remove("user");
      Cookies.remove("role");
      return router.push("/");
    },
    publishedArticle() {
      return router.push("/");
    },
    publishedArticleError(state, result) {
      state.msg = result;
    },
    async getUsers(state, result) {
      console.log('getusers', result.data);
      var pages = await axios.get("api/v1/admin/usersPages");
      var pagesArr = [];
      for (let index = 1; index <= pages.data.pages; index++) {
        pagesArr.push(index);
      }
      state.pages_info.currentPage = result.data.users.current_page;
      state.pages_info.lastPage = result.data.users.last_page;
      state.users = result.data.users.data;
    },
    searchUsers(state, result) {
      state.users = result.data.users.data;
      state.pages_info.currentPage = result.data.users.current_page;
      state.pages_info.lastPage = result.data.users.last_page;
    },
    editUser() {
      return router.push("/admin/usersList");
    },
    userUpdate(state, result) {
      state.user = result.user;
    },
    userPendingArticles(state, result) {
      state.userPendingArticles = result.data.articles;
    },
    editPendingArticle() {
      return router.push("/admin/myPendingArticles");
    }
  },

  actions: {
    login({ commit }, data) {
      axios.defaults.headers.common["Authorization"] = null;
      axios
        .post("/api/v1/login", {
          email: `${data.data.email}`,
          password: data.data.password,
        })
        .then((result) => {
          axios.defaults.headers.common["Authorization"] = "Bearer" + " " + result.data.user.api_token;
          commit("SAVE_USER", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    article({ dispatch, commit }, id) {
      axios
        .get(`api/v1/article/` + id.id)
        .then((result) => {
          if (result.data.msg === "invalid-token") {
            return dispatch('logout');
          }
          if (result.data.status == false) {
            return result.data.msg;
          } else {
            commit("SAVE_ARTICLE", result.data);
          }
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    logout({ commit }) {
      axios
        .post("api/v1/logout")
        .then((result) => {
          commit("DELETE_USER", result);
        })
        .catch((error) => {
          commit("DELETE_USER", error);
        });
    },
    PublishArticle({ commit }, data) {
      axios
        .post("api/v1/dashboard/articles", data.formData)
        .then((result) => {
          console.log(result);
          // commit("publishedArticle", result)
        })
        .catch((error) => {
          commit("publishedArticleError", error);
        });
    },
    getUsers({ dispatch, commit }, data) {
      // axios.headers.common["paginate"] = data.paginate;
      axios
        .get("api/v1/admin/users", { headers: { paginate: data.paginate } })
        .then((result) => {
          if (result.data.msg == "invalid-token") {
            return dispatch('logout');
          }
          commit("getUsers", result);
        })
        .catch((error) => {
          commit("getUsers", error);
        });
    },
    getUser({ dispatch, commit }, data) {
      axios.get(`api/v1/admin/users/${data.id}`).then((result) => {
        if (result.data.msg == "invalid-token") {
          return dispatch('logout');
        }
        commit("userUpdate", result.data)
      })
    },
    searchUsers({ commit }, data) {
      axios
        .post("api/v1/admin/usersSearch", data.data)
        .then((result) => {
          commit("searchUsers", result);
        })
        .catch((error) => {
          commit("searchUsers", error);
        });
    },
    editUser({ commit }, data) {
      console.log("store", data.user);
      axios
        .post(`api/v1/admin/users/${data.user.id}?_method=PUT`, data.user)
        .then((result) => {
          commit("editUser", result);
        });
    },
    userPendingArticles({ commit }) {
      axios.get('/api/v1/dashboard/submitToPendingArticles').then((result) => {
        commit("userPendingArticles", result);
      })
    },
    editPendingArticle({ commit }, data) {
      axios.post(`api/v1/dashboard/submitToPendingArticles/${data.id}?_method=PUT`, data.formData).then((result) => {
        console.log('editPendingArticle', result);
        commit("editPendingArticle", result);
      })
    }
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    getUsers: (state) => {
      return state.users;
    },
    getPages: (state) => {
      return state.pages;
    },
    pagesInfo: (state) => {
      return state.pages_info;
    },
    article: (state) => {
      return state.current_article;
    }
  },
  modules: {},
});
