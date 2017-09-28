<template>
  <div id="app">
    <h1 v-if="$store.user.username">Bienvenue {{$store.user.username}}</h1>
    <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin (username) {
      this.connect(username)
    }
  }
}
</script>

<style lang="stylus">
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

#app
  align() // jeet
  text-align center

.icon-logo
  margin-bottom 2.5rem
</style>
