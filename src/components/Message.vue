<template>
  <article v-bind:class="[customClass]">
    {{data}}
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
