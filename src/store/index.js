import { createStore } from "vuex";
import axios from "axios";
import Cookies from 'js-cookie';
import router from '../router';


export default createStore({
  state: {
    user: Cookies.getJSON('user'),
    role: Cookies.getJSON('role'),
    article: null,
    route: '',
    message: ""
  },
  mutations: {
    SAVE_USER(state, data) {
      if (data.status == false) {
        return state.message = data.msg
      }
      var user = data.user;
      state.user = user;
      Cookies.set('user', user, { expires: 1 })
      state.message = '';
      user.roles.forEach(role => {
        if (role === 'user') {
          state.role = role.name
          Cookies.set('role', role.name, { expires: 1 })
        } else {
          state.role = 'admin'
          Cookies.set('role', 'admin', { expires: 1 })
        }
      });
      // console.log(state.role)
      Cookies.set('credential', user.api_token, { expires: 1 })
      return router.push("/")
    },
    SAVE_ARTICLE(state, article) {
      state.article = article
    },
    DELETE_USER(state) {
      state.user = null
      state.role = null
      Cookies.remove('credential')
      Cookies.remove('user')
      Cookies.remove('role')
    },
    publishedArticle() {
      return router.push("/")
    },
    publishedArticleError(state, result) {
      state.msg = result;
    }
  },

  actions: {
    login({ commit }, data) {
      axios.defaults.headers.common['Authorization'] = null;
      axios.post('/api/v1/login', { email: `${data.data.email}`, password: data.data.password }).then(result => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + result.data.user.api_token
        commit('SAVE_USER', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    article({ commit }, id) {
      axios.get(`api/v1/article/` + id.id).then(result => {
        if (result.data.status == false) {
          return result.data.msg
        } else {
          commit('SAVE_ARTICLE', result.data)
        }
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    logout({ commit }) {
      axios.post('api/v1/logout').then(result => {
        commit('DELETE_USER', result)
      }).catch(error => {
        commit('DELETE_USER', error)
      })
    },
    PublishArticle({ commit }, data) {
      axios.post('api/v1/dashboard/articles', data.formData).then(result => {
        console.log(result)
        // commit('publishedArticle', result)
      }).catch(error => {
        commit('publishedArticleError', error)
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
