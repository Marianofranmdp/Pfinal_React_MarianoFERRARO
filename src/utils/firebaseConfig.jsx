// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmfZRLuzy1jqmtllxNAdLl2F8O_aaEsU8",
  authDomain: "onlygames-f5fa0.firebaseapp.com",
  projectId: "onlygames-f5fa0",
  storageBucket: "onlygames-f5fa0.appspot.com",
  messagingSenderId: "898356916630",
  appId: "1:898356916630:web:072bb64bbb4d215800edb7"
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