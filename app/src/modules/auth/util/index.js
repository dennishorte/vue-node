import store from '@/store'
import { AUTH_LOCAL_TOKEN, AUTH_LOCAL_USER } from '../consts'


function canAccess(routeRecord) {
  if (routeRecord.name == 'Login') {
    return true
  }
  else {
    return store.getters['auth/isLoggedIn']
  }
}

/*
   If the user has a locally cached auth token, load it up.
 */
function initialize() {
  const token = localStorage.getItem(AUTH_LOCAL_TOKEN)
  const user = localStorage.getItem(AUTH_LOCAL_USER)
  if (token && user) {
    store.commit('auth/auth_success', token, user)
  }
}


export default {
  canAccess,
  initialize,
}
