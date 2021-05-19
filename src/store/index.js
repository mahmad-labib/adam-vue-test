import { createStore } from "vuex";
import axios from "axios";
import Cookies from 'js-cookie';

export default createStore({
  state: {
    user: Cookies.getJSON('user'),
    role: Cookies.getJSON('role'),
    article: null,
    route: ''
  },
  mutations: {
    SAVE_USER(state, user) {
      state.user = user;
      Cookies.set('user', user, { expires: 1 })
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
    },
    SAVE_ARTICLE(state, article) {
      state.article = article
    },
    DELETE_USER(state) {
      state.user = null
      state.role = null
      Cookies.remove('credential')
      Cookies.remove('role')
    }
  },

  actions: {
    login({ commit }, data) {
      axios.post('/api/v1/login', { email: `${data.data.email}`, password: data.data.password }).then(result => {
        axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + result.data.user.api_token
        commit('SAVE_USER', result.data.user);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    article({ commit }, id) {
      axios.get(`api/v1/article/` + id.id).then(result => {
        commit('SAVE_ARTICLE', result.data)
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
    }
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  modules: {},
});
