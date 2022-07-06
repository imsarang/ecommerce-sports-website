import firebase from "firebase"
// import "@firebase/firestore"
// always install firebase 8.3.1
firebase.initializeApp({
  apiKey: "AIzaSyAMU095i2mwns2o2ZVrIYRV8aD36lCBVXg",
  authDomain: "ecommerce-sports.firebaseapp.com",
  projectId: "ecommerce-sports",
  storageBucket: "ecommerce-sports.appspot.com",
  messagingSenderId: "400104119720",
  appId: "1:400104119720:web:3ad75161caed51bfd5d19d",
  measurementId: "G-L587T2BS56"
});


export const storage = firebase.storage();
// const analytics = getAnalytics(app);
// export const storage = getStorage(app)
