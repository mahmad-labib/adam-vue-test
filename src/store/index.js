import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://apiProject.stg";

export default createStore({
  state: {
    user: {},
    article: {}
  },
  mutations: {
    SAVE_USER(state, user) {
      state.user = user;
    },
    SAVE_ARTICLE(state, article) {
      state.article = article
    }
  },
  actions: {
    login({ commit }, data) {
      axios.post('/api/v1/login', { email: `${data.data.email}`, password: data.data.password }).then(result => {
        commit('SAVE_USER', result.data.user, console.log(result.data));
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    article({ commit }, id) {
      axios.get(`api/v1/article/` + id.id).then(result => {
        commit('SAVE_ARTICLE', result.data,)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  modules: {},
});
