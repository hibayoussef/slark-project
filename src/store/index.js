import Vue from "vue";
import Vuex from "vuex";
import { authStore } from "../modules/Authentication/store/index";
import { TaskStore } from "../modules/Task-Page/store/index"
import { projectStore } from '../modules/Project/store/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authStore,
    TaskStore,
    projectStore
  }
});
