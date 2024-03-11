// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   // apiKey: "AIzaSyCVPrMgM8S27trCNzkCzNF0ddhG3Ocdgxw",
//   // authDomain: "pric-firebase-app.firebaseapp.com",
//   // databaseURL: "https://pric-firebase-app-default-rtdb.firebaseio.com",
//   // projectId: "pric-firebase-app",
//   // storageBucket: "pric-firebase-app.appspot.com",
//   // messagingSenderId: "571097870668",
//   // appId: "1:571097870668:web:7ce8991580cfa8d7ac5fe9"

//   apiKey: "AIzaSyCWZHt3-gPM8OgiYH_CHmsZBmnLCV5CZ48",
//   authDomain: "pric-app.firebaseapp.com",
//   projectId: "pric-app",
//   storageBucket: "pric-app.appspot.com",
//   messagingSenderId: "393789347941",
//   appId: "1:393789347941:web:4acb59a5b5f54c4b0d4e8c"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const db = getFirestore(app);

// export { app,database,db};


import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuWOAWYijgrN8rJnlvpO7w5e-H9jcPjO8",
  authDomain: "pric-2.firebaseapp.com",
  projectId: "pric-2",
  storageBucket: "pric-2.appspot.com",
  messagingSenderId: "538295235053",
  appId: "1:538295235053:web:b05f7007a498101ed3f7e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};