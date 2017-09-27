<template>
  <div>
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
