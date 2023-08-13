import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async () => {
     // se conecta a la DB y devuelve una consulta
     const querySnapshot = await getDocs(collection(db, "juegos"));
     // mapea el array que recibe y devuelve un array con objetos
     return querySnapshot.docs.map(document => (
          {
               id: document.id,
               ...document.data()
          }
     ));
}

export const firestoreFetchSome = async (field, idField) => {
     // trae toda la colección
     const juegosRef = collection(db, 'juegos');
     // define los parámetros (campo, condición y valor)
     const juegosQueryCategory = query(juegosRef, where(field, '==', idField));
     // ejecuta la consulta con el filtro
     const querySnapshot = await getDocs(juegosQueryCategory);
     // mapea el resultado para usarlo
     return querySnapshot.docs.map(document => (
          {
               id: document.id,
               ...document.data()
          }
     ));
}

export const firestoreFetchOne = async (idItem) => {
     // console.log(idItem);
     const docRef = doc(db, "juegos", idItem);
     const docSnap = await getDoc(docRef);

     if (docSnap.exists()) {
          return {
               id: idItem,
               ...docSnap.data()
          }
     } else {
          console.log('No se encontró el producto');
     }
}