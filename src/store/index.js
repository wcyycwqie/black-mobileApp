import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USER_KEY = 'hm-toutiao-mobile-user'

export default new Vuex.Store({

  state: {
    user: JSON.parse(localStorage.getItem(USER_KEY)) || '{}'
  },
  mutations: {
    updateUser(state, data) {
      // vuex 更新数据 让页面数据有响应式变化
      state.user = data
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    clearUser(state, data) {
      state.user = {}

      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {},
  modules: {}
})
