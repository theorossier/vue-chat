<template>
  <div class="user-list">
    <ul>
      <user v-for="user in users" :data="user"></user>
    </ul>
  </div>

</template>

<script>
  import User from './User'

  export default {
    props: ['users'], // Implement users property
    components: {
      User
    }
  }
</script>

<style lang="stylus" scoped>
  .user-list
      position fixed
      top 60px
      left 60px
      width 100%
      max-width 445px
      height: calc(100vh - 120px);
      border 1px solid
      border-color #ffffff
      box-shadow 0 0 7px 2px slow
      border-color white
      background transparent
</style>
