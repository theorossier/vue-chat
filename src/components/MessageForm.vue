<template>
  <form class="message-form" @submit.prevent="onSubmit">
    <input ref="input" type="text" placeholder="message" v-model="message" v-on:input="onTyping(message)">
  </form>
</template>

<script>
  export default {
    data () {
      return {
        error: false,
        message: '',
        username: '',
        charCount: 0,
        startTime: false,
        startDate: '',
        seconds: 0,
        timeCeil: 0.5,
        timeMessage: '',
        speedIntensity: {
          speed: 0,
          oldMessageLength: 0,
          newMessageLength: 0,
          messageTimeout: false,
          defaultColor: ['120', '0', '255'],
          fastColor: ['255', '0', '255']
        }
      }
    },
    methods: {
      onSubmit (e) {
        // Stop chrono
        this.stopChrono()

        this.sendMessage(this.message)

        // ResetProperties
        this.resetAllTimeProperties()
      }
    }
  }
</script>

<style lang="stylus" scoped>

.message-form
    position: fixed;
    width: calc(100% - 545px);
    height: 175px;
    bottom: 35px;
    right 35px;
    padding 25px

input
    width 100%
    height 100%
    text-align left
    padding 20px
    background transparent
    border 1px solid
    border-color #ffffff
    border-radius: 8px 8px 8px 0;
    box-shadow 0 0 7px 2px neonblue
	  border-color white
    color slow
    filter: drop-shadow(0 0 30px neonblue);
    transition: color .2s linear, background-color .3s ease-in;

  input:focus
    outline: none;
    background-color white
    transition: background-color .3s ease-in;

  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: white;
    opacity .5
  }
  input::-moz-placeholder { /* Firefox 19+ */
    color: white;
    opacity .5
  }
  input:-ms-input-placeholder { /* IE 10+ */
    color: white;
    opacity .5
  }
  input:-moz-placeholder { /* Firefox 18- */
    color: white;
    opacity .5
  }

</style>
