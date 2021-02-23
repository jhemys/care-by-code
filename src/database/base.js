import firebase from "firebase/app";

const  firebaseConfigDev = {
  apiKey: "AIzaSyCKiK4zorb_sqD9qKpIPXrDt2yTgKtbxE0",
  authDomain: "care-by-code-development.firebaseapp.com",
  databaseURL: "https://care-by-code-development-default-rtdb.firebaseio.com",
  projectId: "care-by-code-development",
  storageBucket: "care-by-code-development.appspot.com",
  messagingSenderId: "168275090869",
  appId: "1:168275090869:web:a1d88e6a179fcd6ef18dfc",
  measurementId: "G-PFPMGZ2VXT"
};

const  firebaseConfigProd = {
  apiKey: "AIzaSyA_m-BdDWxy3GOQe7fdLXKZACaLIk1wO5M",
  authDomain: "care-by-code.firebaseapp.com",
  databaseURL: "https://care-by-code-default-rtdb.firebaseio.com",
  projectId: "care-by-code",
  storageBucket: "care-by-code.appspot.com",
  messagingSenderId: "507775440428",
  appId: "1:507775440428:web:e392d1f957957be5152389",
  measurementId: "G-QBWH9X642V"
};

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.NODE_ENV === 'production' ? firebaseConfigProd : firebaseConfigDev);
}else {
  firebase.app();
}