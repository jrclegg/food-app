import Vue from 'vue'
import Alerts from './components/Alerts.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Alerts),
}).$mount('#app')
