// Async code

console.log('start')

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email })
    }, 2000)
  })
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3'])
    }, 1000)
  })
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video')
    }, 2000)
  })
}

loginUser('email', 'pass123')
  .then(user => getUserVideos(user.email))
  .then(videos => videoDetails(videos[0]))
  .then(detail => console.log(detail))
/*
const user = loginUser('joe@joe.com', '123456', user => {
  console.log(user)
  getUserVideos(user.userEmail, videos => {
    console.log(videos)
  })
})
*/

const user = loginUser('ed', 'sdf')
const videos = videoDetails(user.email)

console.log('end')

const yt = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting from youtube')
    resolve({ videos: ['video_a', 'video_b', 'video_c', 'video_d'] })
  }, 2000)
})

const fb = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting from facebook')
    resolve({ user: 'name' })
  }, 2000)
})

Promise.all([yt, fb]).then(result => console.log(result))

// async await
