import axios from 'axios'
import store from '@/store'


const AUTH_LOCAL_TOKEN = 'auth_token'


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
  const authToken = localStorage.getItem(AUTH_LOCAL_TOKEN)
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = authToken
  }
}


export default {
  AUTH_LOCAL_TOKEN,

  canAccess,
  initialize,
}
