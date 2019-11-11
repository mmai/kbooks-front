import Vue from "vue";
import Vuex from "vuex";
// import Vuex, { StoreOptions } from "vuex";
import api from "../lib/api";
import { RootState } from "../types";

Vue.use(Vuex);

// Check if user is known at startup
let user = undefined;
let strUser = localStorage.getItem("user");
if (strUser) {
  user = JSON.parse(strUser);
}

// export const store: StoreOptions<RootState> = {
export default new Vuex.Store({
  state: {
    status: "",
    user,
    connected: !!user
  },
  mutations: {
    AUTH_CHECK() {},
    AUTH_REQUEST(state) {
      state.status = "loading";
    },
    AUTH_SUCCESS(state, payload) {
      state.status = "success";
      state.user = payload.user;
      state.connected = true;
      if (state.user.language) {
        Vue.config.language = state.user.language;
      }
    },
    AUTH_ERROR(state) {
      state.status = "error";
    },
    LOGOUT(state) {
      state.status = "";
      state.connected = false;
      state.user = undefined;
    }
  },
  getters: {
    isConnected: state => {
      return state.connected;
    }
  },
  actions: {
    auth_check({ commit }) {
      commit("AUTH_CHECK");
      api
        .auth_check()
        .then(
          resp => {
            const user = resp;
            commit("AUTH_SUCCESS", { user });
          },
          err => {
            commit("AUTH_ERROR");
          }
        )
        .catch(err => {
          commit("AUTH_ERROR");
        });
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("AUTH_REQUEST");
        api
          .login(user)
          .then(resp => {
            const user = resp;
            commit("AUTH_SUCCESS", {
              // user: { login: user.login, password: "-" }
              user: user
            });
            resolve();
          })
          .catch(err => {
            // this.messageErreur = "Identifiant ou mot de passe invalide";
            commit("AUTH_ERROR");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      commit("LOGOUT");
      return api.logout();
    }
  },
  modules: {}
});
