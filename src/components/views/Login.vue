<template>
  <main class="login">
    <img class="logo" src="../../assets/logo.png" alt="">
    <login-form></login-form>
    <!-- <div class="word-animation-wrapper">
      <div class="word-animation-group">
        <span aria-hidden="true"><p class="message">Règle: Pas l'temps d'niaiser, t'as une seconde pour taper</p></span>
      </div>
    </div> -->
  </main>
</template>


<script>
  // Imports
  import LoginForm from 'components/LoginForm'
  // Component
  export default {
    components: {
      LoginForm
    }
  }
</script>

<style lang="stylus" scoped>
  .login
    display flex
    flex-direction column
    justify-content center
    background-image url('../../assets/grid.png')
    background-repeat no-repeat
    background-position center
    background-size cover
    background-color darkblue

    :after
      content: ''
      position fixed
      top 60px
      left 60px
      right 60px
      bottom 60px
      border 1px solid
      border-color #ffffff
      box-shadow 0 0 0 1px neonblue
      filter: drop-shadow(0 0 1px neonblue);
      border-color white
      pointer-events none
      z-index -1

  .logo
    position relative
    width 100%
    max-width 980px
    padding 0 40px
    margin 0 auto 70px
    z-index 2

  .word-animation

    &-wrapper
      position: absolute
      left: 50%
      bottom: 80px
      width calc(100% - 160px)
      overflow hidden
      transform translate(-50%)
      pointer-events none

    &-group
      display: block
      position: relative
      float: left
      margin: 0
      white-space: nowrap
      -webkit-animation: translate-keywords linear 25s infinite
      animation: translate-keywords linear 25s infinite

      span
        display: inline-block
        padding-right: 10rem

  @keyframes translate-keywords
    0%
      transform: translateX(100vw)
    100%
      transform: translateX(-650px)

</style>
