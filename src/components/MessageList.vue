<template>
  <div class="message-list">
    <!-- Message -->
    <message v-for="message in messages" :data="message"></message>
  </div>
</template>


<script>
  import Message from './Message'

  export default {
    props: ['messages'], // Implement messages property
    components: {
      Message
    }
  }
</script>


<style lang="stylus" scoped>
  .message-list
      position fixed
      top 60px
      right 0
      width calc(100% - 475px)
      height calc(100% - 300px)
      padding 0 60px
      margin 0 0 0 auto
      text-align left
      overflow scroll
</style>
