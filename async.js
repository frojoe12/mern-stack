const cleanRoom = user => {
  return new Promise((resolve, reject) => {
    // go to server
    // check the username password
    if (user.email !== 'joe@joe.com') {
      reject('unknown user')
    }
    if (user.password !== 'pass123') {
      reject('incorrect password')
    }
    // resolve if ok with the token
    // set cookie to token for continuous login
    resolve('fa5hvasdghhg676asdhgf&ghj')
  })
}

const removeTheGarbage = token => {
  console.log(token)
  return new Promise((resolve, reject) => {
    resolve(token)
  })
}

const winIceCream = token => {
  return new Promise((resolve, reject) => {
    resolve(`logged in ok - with token ${token}`)
  })
}

cleanRoom({ email: 'joe@joe.com', password: 'pass123' })
  .then(p => {
    return removeTheGarbage(p)
  })
  .then(p => {
    return winIceCream(p)
  })
  .then(p => {
    console.log(p)
  })
  .catch(error => {
    console.log(error)
  })
