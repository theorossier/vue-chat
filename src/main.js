// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App'
import dataManager from './dataManager'

Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

Vue.use(dataManager, {
  api: 'https://bddi-chat2017.herokuapp.com/'
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
