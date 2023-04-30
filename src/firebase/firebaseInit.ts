import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcxmp4SP4jRLLnFWZYTM17H1nFEaMRMak",
  authDomain: "invoiceapp-d747c.firebaseapp.com",
  projectId: "invoiceapp-d747c",
  storageBucket: "invoiceapp-d747c.appspot.com",
  messagingSenderId: "497902283841",
  appId: "1:497902283841:web:28d2ea0b916678c6e9aac0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
