<template>
  <main class="chat">
    <user-list :users="store.users"></user-list>
    <message-list :messages="store.messages"></message-list>
    <message-form></message-form>
  </main>
</template>

<script>
  import UserList from 'components/UserList'
  import MessageList from 'components/MessageList'
  import MessageForm from 'components/MessageForm'

  export default {
    props: ['store'], // Implement store property
    components: {
      UserList,
      MessageList,
      MessageForm
    }
  }
</script>

<style lang="stylus" scoped>
  .chat
    background-image url('../../assets/grid.png')
    background-repeat no-repeat
    background-position center
    background-size cover
    background-color darkblue
</style>
