<template>
  <div id="app">
    <!-- <h1 v-if="$store.user.username">Bienvenue {{$store.user.username}}</h1> -->
    <router-view :store="$store"></router-view>
  </div>
</template>

<style lang="stylus">
@import "styles/theme"

</style>
