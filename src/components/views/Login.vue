<template>
  <div class="form">
    <transition name="message">
      <p class="showmessage"v-if="timeMessage">{{timeMessage}}</p>
    </transition>
    <p><i>{{seconds}}s</i></p>
    <form @submit.prevent="onSubmit">
      <p class="error" v-if="error">The username is invalid</p>
      <input type="text" placeholder="username" v-model="username" v-on:input="speed(username)">
      <button>Login</button>
      <p>Pas le droit à l'échec, pas d'espace, moins d'une demi seconde</p>
    </form>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        error: false,
        username: '',
        charCount: 0,
        startTime: false,
        startDate: '',
        seconds: 0,
        timeCeil: 0.5,
        timeMessage: ''
      }
    },
    methods: {
      onSubmit (e) {
        // Stop chrono
        this.stopChrono()
        // Validation
        if (!this.username.match(/^\w{1,15}$/)) {
          this.error = true
        } else if (this.seconds < this.timeCeil) {
          this.error = false
          this.$emit('login', this.username)
        }
        // ResetProperties
        this.resetAllTimeProperties()
      },
      speed (value) {
        console.log(value.length)
        if (!value.match(/^\w{1,1500}$/) || value.length < this.charCount) { // Matching and no delete
          console.log('terminé')
          this.resetAllTimeProperties()
          return
        } else if (value.length > 0) {
          this.charCount ++
          if (!this.startTime) {
            this.startTime = true
            this.startChrono()
          }
        }
      },
      startChrono () {
        this.startDate = new Date()
        console.log('start')
      },
      stopChrono () {
        let endDate = new Date()
        this.seconds = (endDate.getTime() - this.startDate.getTime()) / 1000
        // Show Message
        this.showTimeMessage()
      },
      showTimeMessage () {
        if (this.seconds < this.timeCeil) {
          this.timeMessage = 'Too Faaast'
        } else {
          this.timeMessage = 'Too Bad'
        }
        setTimeout(() => {
          this.timeMessage = ''
        }, 1000)
      },
      resetAllTimeProperties () {
        this.username = ''
        this.charCount = 0
        this.startTime = false
        this.startDate = ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .form {
    width: 100vw;
  }

  .showmessage {
    position: fixed;
    top: 0;
    left: 50%;
    display: inline-block;
    width: 100%;
    font-family: 'Yellowtail', cursive;
    font-size: 8em;
    line-height: 0;
    text-align: center;
    color: #2200fc;
    filter: drop-shadow(0 0 30px #2200fc);
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(-5deg);
    z-index: 10;
    margin: 0;
  }

  .error {
    color: red
  }

  .message-enter-active,
  .message-leave-active {
    transition: opacity .5s, transform .5s;
  }

  .message-leave {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(-5deg) scale(1);
  }
  .message-enter-to {
    transform: translate(-50%, -50%) rotate(-5deg) scale(1);
  }

  .message-enter,
  .message-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(-5deg) scale(3);
  }
</style>
