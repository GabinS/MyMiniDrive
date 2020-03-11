import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyDcWtxsgtdTdqx2JKzv9bzjcorKHAdiupY',
  authDomain: 'myminidrive-a15cc.firebaseapp.com',
  databaseURL: 'https://myminidrive-a15cc.firebaseio.com',
  projectId: 'myminidrive-a15cc',
  storageBucket: 'myminidrive-a15cc.appspot.com',
  messagingSenderId: '287220573902',
  appId: '1:287220573902:web:0e96858c12b5138ad9d29f'
})

// Export the database for components to use.
export const db = firebaseApp.database()
