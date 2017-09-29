<template>
  <article class="message" v-bind:class="[customClass]">
    <div class="message-avatar"></div>
    <div class="message-content">
      <h2 v-if="data.data.author.username" class="message-author">{{data.data.author.username}}</h2>
      <p class="message-body">{{data.data.body}}</p>
    </div>
    <!-- {{data}} -->
  </article>
</template>

<script>
  export default {
    props: ['data'],
    data () {
      return {
        customClass: ''
      }
    },
    methods: {
      detectOwnMessage () {
        if (this.data.data.author.id === this.$store.user.id) {
          this.customClass = 'myMessage'
        }
      }
    },
    created () {
      this.detectOwnMessage()
    }
  }
</script>

<style lang="stylus" scoped>
  .message
    padding-bottom: 40px
    &-author
      margin 0 0 20px
    &-avatar
      display inline-block
      vertical-align top
      width 120px
      height 120px
      background-color rgba(255,255,255,0.1)
    &-content
      display inline-block
      vertical-align top
      margin-left 30px
      width calc(100% - 155px)
    &-body
      padding 30px
      background-color rgba(255,255,255,0.1)
</style>
