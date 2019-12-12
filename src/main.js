import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = true

axios.defaults.baseURL = 'http://'+process.env.BACKEND_ADDRESS+':8080'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  render: h => h(App),
}).$mount('#app')
