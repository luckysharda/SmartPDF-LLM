import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCQWOKrV22KChdHkgNHrXs-jqGJ1FEnQaw",
  authDomain: "chat-with-pdf-970c1.firebaseapp.com",
  projectId: "chat-with-pdf-970c1",
  storageBucket: "chat-with-pdf-970c1.appspot.com",
  messagingSenderId: "942598372052",
  appId: "1:942598372052:web:e8c9f22134386a27365941"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage };
// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCQWOKrV22KChdHkgNHrXs-jqGJ1FEnQaw",
//   authDomain: "chat-with-pdf-970c1.firebaseapp.com",
//   projectId: "chat-with-pdf-970c1",
//   storageBucket: "chat-with-pdf-970c1.appspot.com",
//   messagingSenderId: "942598372052",
//   appId: "1:942598372052:web:e8c9f22134386a27365941"
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db, storage };
