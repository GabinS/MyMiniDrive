import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

// Add title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
