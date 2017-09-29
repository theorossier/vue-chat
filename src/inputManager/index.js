// Import utils
import map from './../utils/number/map'

export default {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        onTyping (value) {
          // speed intensity
          this.calcSpeed(value)
          // Chrono ERROR
          if (!value.match(/\w{1,}\s{0,}/) || value.length < this.charCount) { // Matching and no delete
            this.resetAllTimeProperties()
            return
          // Chrono START
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
          this.charCount = 0
          this.startTime = false
          this.startDate = ''
          this.username = ''
          this.message = ''
        },

        calcSpeed (value) {
          this.speedIntensity.newMessageLength = value.length
          if (this.speedIntensity.messageTimeout === false) {
            this.speedIntensity.messageTimeout = true

            this.speedIntensity.messageInterval = setInterval(() => {
              let speed = this.speedIntensity.newMessageLength - this.speedIntensity.oldMessageLength
              if (speed > -1) {
                // Change Color
                this.inputColor(speed)
                this.speedIntensity.speed = speed
              }
              this.speedIntensity.oldMessageLength = this.speedIntensity.newMessageLength

              if (this.speedIntensity.speed <= 0) {
                clearInterval(this.speedIntensity.messageInterval)
                console.log('clear')
                this.speedIntensity.messageTimeout = false
              }
            }, 300)
          }
          console.log(this.speedIntensity.messageTimeout)
        },

        inputColor (speed) {
          let color = []
          for (var i = 0; i < this.speedIntensity.fastColor.length; i++) {
            let max = Math.max(this.speedIntensity.defaultColor[i], this.speedIntensity.fastColor[i])
            let min = Math.min(this.speedIntensity.defaultColor[i], this.speedIntensity.fastColor[i])
            let colorNumber = map(speed, 0, 10, min, max)
            color.push(colorNumber)
          }
          let colorStyle = `rgb(${color.join()})`
          this.$nextTick(() => {
            this.$refs.input.style.color = colorStyle
          })
          console.log(colorStyle)
          console.log(document.querySelector('input'))
        }
      }
    })
  }
}
