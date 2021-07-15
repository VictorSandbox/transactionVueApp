export default {
  state: {
    modal: false,
    modalResolve: null,
  },

  getters: {
    getModal: function(state) {
      return state.modal;
    },
  },

  mutations: {
    showModal: function(state, payload) {
      state.modalResolve = payload.resolve;
      state.modal = true;
    },
    hideModal: function(state) {
      state.modalResolve = null;
      state.modal = false;
    },
    resolveModal: function(state) {
      if (state.modalResolve) {
        state.modalResolve();
      }
    },
  },
  actions: {
    showModal: function(context) {
      return new Promise((resolve, reject) => {
        context.commit("showModal", { resolve });
      });
    },
    hideModal: function(context) {
      context.commit("hideModal");
    },
    resolveModal: function(context) {
      context.commit("resolveModal");
      context.commit("hideModal");
    },
  },
};
