import Vue from 'vue';
import Vuex from 'vuex';
import api from './helpers/api';
Vue.prototype.$api = api;
Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    loginType: 'User',
    registerType: 'User',
    menuFamily: [
      { text: "select your Family", value: null },
    ],
    token: '',
    role: ''
  },
  mutations: {
    setLoginType(state, value) {
      state.loginType = value
    },
    setRegisterType(state, value) {
      state.registerType = value
      // console.log(value, 'kjkjkj')
    },
    setMenuFamily(state, value) {
      api
        .get(`/family/all`)
        .then(({ data }) => {
          data.forEach(function (element) {
            state.menuFamily.push({ text: element.name, value: element.familyCode })
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setToken(state, value) {
      console.log('masok state')
      state.token = value.token
      state.role = value.role
      localStorage.setItem("tk", value.token);
      localStorage.setItem("rl", value.role);
      var hours = 0.25; // Reset when storage is more than 24hours
      var now = new Date().getTime();
      var setupTime = localStorage.getItem('tk');
      if (setupTime == null) {
        localStorage.setItem('tk', now)
      } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
          localStorage.clear()
          localStorage.setItem('tk', now);
        }
      }
    }
  },
  actions: {
    getMenuFamily(context) {
      context.commit("setMenuFamily")
    }
  },
});
