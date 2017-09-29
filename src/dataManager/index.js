import io from 'socket.io-client'
import Vue from 'vue'
export const store = new Vue({
  data: {
    user: {},
    messages: [],
    users: []
  }
})
export default {
  install (Vue, options) {
    const socket = io(options.api)
    Vue.prototype.$store = store

    // Events
    socket.on('user connected', (user) => {
      console.log(user)
      store.user = user
    })

    socket.on('new message', (data) => {
      store.messages.push({data})
    })

    socket.on('getUsers', (users) => {
      store.users = users
    })

    socket.on('wizz', (user) => {
      // implementation
    })

    socket.on('user left', (userId) => {
      console.log('deconnexion ', userId)
      store.users = store.users.filter(el => el.id !== userId)
    })

    socket.on('user joined', (user) => {
      store.users.push(user.new)
    })

    Vue.mixin({
      methods: {
        connect (username) {
          socket.emit('user connected', {
            username
          })
        },
        sendMessage (text) {
          socket.emit('new message', text)
        }
      }
    })
  }
}
