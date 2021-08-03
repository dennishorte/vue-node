const UserService = {}

UserService.create = async function(data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user: data})
  })
  return await response.json()
}

UserService.getAll = async function() {
  const response = await fetch('/api/users')
  return await response.json()
}

UserService.login = async function(name, password) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      password
    }),
  })

  return await response.json()
}


export default UserService
