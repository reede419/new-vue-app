import Vue from 'vue'
import App from './App.vue'
import router from './router/index'// loads from src/router/index.js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

    
new Vue({    
  router,
  render: h => h(App),
}).$mount('#app')