import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    $_user: User
  },
  strict: debug
});
