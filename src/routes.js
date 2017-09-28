import ChatComponent from 'components/views/Chat'
import LoginComponent from 'components/views/Login'

export default [
  {
    path: '/',
    component: ChatComponent,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    component: LoginComponent
  }
]
