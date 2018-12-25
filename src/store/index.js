import Vue from 'vue';
import Vuex from 'vuex';
import robotsModules from './modules/robots';
import usersModules from './modules/users';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModules,
    users: usersModules,
  },
});
