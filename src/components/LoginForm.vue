<template>
    <div class="form">

      <transition name="message">
        <p class="showmessage"v-if="timeMessage">{{timeMessage}}</p>
      </transition>

      <!-- <p><i>{{seconds}}s</i></p> -->

      <form @submit.prevent="onSubmit">
        <p class="error" v-if="error">The username is invalid</p>
        <span class="label">Login :</span>
        <input ref="input" type="text" placeholder="| Username" v-model="username" v-on:input="onTyping(username)">
      </form>

    </div>
</template>


<script>
  // Component
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
        // Validation
        if (!this.username.match(/\w{1,}\s{0,}/)) {
          this.error = true
        } else if (this.seconds < this.timeCeil) {
          this.error = false
          this.connect(this.username)
        }
        // ResetProperties
        this.resetAllTimeProperties()
      }
    },
    created () {
      this.$store.$watch('user', (user) => {
        if (user.id) {
          this.$router.push('/')
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .form
    position relative
    z-index 1
    text-align: center;

  .showmessage {
    position: fixed;
    top: 50%;
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

  input
    width 300px
    height 40px
    padding 20px
    margin-left 30px
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
      color: slow;
      opacity .5
    }
  input::-moz-placeholder { /* Firefox 19+ */
      color: slow;
      opacity .5
    }
  input:-ms-input-placeholder { /* IE 10+ */
      color: slow;
      opacity .5
    }
  input:-moz-placeholder { /* Firefox 18- */
      color: slow;
      opacity .5
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
