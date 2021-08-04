import Login from './view/Login'
import Logout from './view/Logout'

export default [
  {
    path: '/login',
    name: 'Login',
    title: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    title: 'Logout',
    component: Logout,
  },
]
