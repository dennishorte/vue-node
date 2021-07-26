const bcrypt = require('bcrypt');
const randomId = require('random-id')


const User = {}

// Database storage!
const users = []


User.all = async function() {
  return users
}

User.insert = async function(name, password) {
  const password_hash = await _hash_password(password)

  users.push({
    id: randomId(32),
    name,
    password_hash,
    token: name,
  })
}

User.findByToken = async function(token) {
  for (const i = 0; i < users.length; i++) {
    if (users[i].token === token) {
      return null, users[i]
    }
  }

  return null, null
}

async function _hash_password(password) {
  /* const hash = await bcrypt.hash(password, 10)
   * return hash */
  return password
}


module.exports = User
