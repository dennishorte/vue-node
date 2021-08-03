const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const randomId = require('random-id')


const User = {}


// Database storage!
const users = []


User.all = async function() {
  return users
}

User.checkPassword = async function(name, password) {
  const user = await User.findByName(name)

  if (!user) {
    throw `User not found (${name})`
  }

  const password_matches = await bcrypt.compare(password, user.password_hash)
  if (!password_matches) {
    throw `Invalid password for user (${name})`
  }

  return user
}

User.insert = async function(name, password, slack) {
  const id = randomId(32)
  const password_hash = await bcrypt.hash(password, 10)

  // Check if this user name is already taken
  const existing_user = await User.findByName(name)
  if (existing_user) {
    throw `User with name (${name}) already exists`
  }

  users.push({
    id,
    name,
    slack,
    password_hash,
    token: User.util.generateToken(id, name),
  })

  const new_user = await User.findByName(name)
  return new_user
}

User.findByFunction = async function(f) {
  for (let i = 0; i < users.length; i++) {
    if (f(users[i])) {
      return users[i]
    }
  }

  return null
}

User.findById = async function(id) {
  return await User.findByFunction(user => user.id === id)
}

User.findByName = async function(name) {
  return await User.findByFunction(user => user.name === name)
}

User.findByToken = async function(token) {
  return await User.findByFunction(user => user.token === token)
}

////////////////////////////////////////////////////////////
// User.util

User.util = {}

User.util.generateToken = function(id, name) {
  return jwt.sign({ user: { id, name } }, process.env.SECRET_KEY)
}


////////////////////////////////////////////////////////////
// Exports

module.exports = User
