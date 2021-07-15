import Vue from "vue";
import Vuex from "vuex";
import transaction from "./modules/transaction";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transaction,
    modal
  },
});
