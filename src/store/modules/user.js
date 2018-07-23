import * as _api from "@/api/user";
// import Vue from "vue";

const state = {
  users: ["John", "Evan"]
};

const mutations = {
  UPDATE_USERS(state, payload) {
    state.users = payload;
    // Vue.set(state.users, "key", "value");
    // Vue.set(state.users, "username", "jack");
  },
  ADD_USER(state, payload) {
    state.users.push.apply(state.users, payload);
  }
};

const actions = {
  fetchUsers({ commit }) {
    return new Promise((resolve, reject) => {
      _api
        .getUsers()
        .then(response => {
          commit("UPDATE_USERS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  addUser({ commit }, data) {
    commit("ADD_USER", data);
  }
};

const getters = {
  users: state => state.users // or filter
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
