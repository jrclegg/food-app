import Vue from 'vue'
import Alerts from './components/Alerts.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(Alerts)
})
