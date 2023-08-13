// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "onlygames-985b0.firebaseapp.com",
  projectId: "onlygames-985b0",
  storageBucket: "onlygames-985b0.appspot.com",
  messagingSenderId: "918340015922",
  appId: "1:918340015922:web:a0ea51c30d7a3e9c28e92b"
};
// export const firestoreFetchOne = async (idItem) =>{
//   const docRef = doc(db,"juegos", idItem);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()){
//     return{
//       id: idItem,
//       ...docSnap.data()
//     }
//   } else { console.log("No such document!")}
// }
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;