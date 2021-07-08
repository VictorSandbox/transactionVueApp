import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [
      {type: 'debit' , description: 'Vue Class' , amount: 40000000},
      {type: 'credit', description: 'Payroll' , amount: 1000000}
    ]
  },
  getters:{
    getTransactions: function(state) {
      return state.transactions;
    },

    getTotal: function(state) {
      let balance = 0;
       
      if (state.transactions.length > 0) {
        console.log(state.transactions.length)
        state.transactions.forEach(transaction => {
          if (transaction.type === "credit") {
            balance = balance + state.transactions.amount
            console.log(state.transactions.amount)
          } else {
            balance = balance - state.transactions.amount
            console.log(state.transactions.amount)
          }
        });
      }
      console.log(balance)
      return balance
    }
  },

  mutations: {
    addTransaction: function(state, transaction) {
      state.transactions.unshift(transaction);  
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
