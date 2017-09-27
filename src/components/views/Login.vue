<template>
  <main>
    <h1>Voici un login</h1>
    <LoginForm></LoginForm>
    <input type="text" @input>
  </main>
</template>

<script>
  import LoginForm from 'components/LoginForm.vue'

  export default {
    components: {
      LoginForm
    }
  }
</script>
