import Vue from "vue";
import Vuex from "vuex";

import offers from "./modules/offers";
import airports from "./modules/airport";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    offers,
    airports
  },
});
