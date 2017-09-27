<template>
  <div>
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
