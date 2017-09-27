<template>
  <form @submit.prevent="onSubmit">
    <p class="error" v-if="error">The username is invalid</p>
    <input type="text" placeholder="username" v-model="username">
    <button>Login</button>
  </form>
</template>


<script>
  export default {
    data () {
      return {
        error: false,
        username: ''
      }
    },
    methods: {
      onSubmit (e) {
        // Validation
        if (!this.username.match(/^\w{1,15}$/)) {
          this.error = true
        } else {
          this.error = false
          this.$emit('login', this.username)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .error {
    color: red
  }
</style>
