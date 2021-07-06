import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: []
  },
  getters:{

  },
  mutations: {
    addTransaction: function(state, transaction) {
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));  
      console.log(state.transactions);
    }   
  },
  actions: {
    addTransaction: function(context, transaction) {
      context.commit("addTransaction", transaction);
    },
  },
  modules: {},
});
