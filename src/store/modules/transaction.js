export default {
  state: {
    transactions: [
      { type: "debit", description: "Vue Class", amount: 3000 },
      { type: "credit", description: "Payroll", amount: 21000 },
    ],
  },

  getters: {
    getTransactions: function(state) {
      return state.transactions;
    },

    getTotal: function(state) {
      let balance = 0;

      if (state.transactions.length > 0) {
        console.log(state.transactions.length);
        state.transactions.forEach((transaction) => {
          if (transaction.type === "credit") {
            balance = balance + transaction.amount;
            console.log(transaction.amount);
          } else {
            balance = balance - transaction.amount;
            console.log(transaction.amount);
          }
        });
      }
      console.log(balance);
      return balance;
    },
  },

  mutations: {
    addTransaction: function(state, transaction) {
      state.transactions.unshift(transaction);
      console.log(state.transactions);
    },
    removeTransaction: function(state, index) {
      state.transactions.splice(index, 1);
    },
  },
  actions: {
    addTransaction: function(context, transaction) {
      console.log(transaction);
      console.log(context);
      context.commit("addTransaction", transaction);
    },
    removeTransaction: function(context, index) {
      console.log(context);
      context.commit("removeTransaction", index);
    },
  },
};
