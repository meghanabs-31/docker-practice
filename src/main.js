import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ninjas from './ninjas.vue'
import header from './components/header.vue'

Vue.component('ninjas',ninjas);


Vue.config.productionTip = false

new Vue({
  router,
  el:'#app',
  render: h => h(App)
}).$mount('#app')
