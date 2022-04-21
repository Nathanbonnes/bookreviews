import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAE0VlMjSj9Q9FoP7S3W16KLo6gZk8_Rj8",
    authDomain: "gretchen-s-book-recs.firebaseapp.com",
    projectId: "gretchen-s-book-recs",
    storageBucket: "gretchen-s-book-recs.appspot.com",
    messagingSenderId: "943246042858",
    appId: "1:943246042858:web:a5d6807e9128c7cd30d993"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}