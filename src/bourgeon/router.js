/* eslint-disable no-unused-vars */
import VueRouter from 'vue-router'
import routes from 'src/routes'
import { store } from 'src/dataManager'

export default {
  router: null,
  install (Vue) {
    const router = new VueRouter({
      routes,
      mode: 'history'
    })

    router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.auth) && store.user.id == null) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })

    Vue.mixin({
      beforeCreate () {
        if (this.$root === this) {
          this.$options.router = router
        }
      }
    })

    Vue.use(VueRouter)
  }
}
