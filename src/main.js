import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Money from './mixins/money'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins:[Money],
  render: h => h(App)
}).$mount('#app')
