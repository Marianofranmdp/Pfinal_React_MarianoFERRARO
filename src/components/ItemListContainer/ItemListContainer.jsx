import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch, firestoreFetchSome} from "../../utils/FirestoreFetch"
 //const {juegos} = require("../../utils/juegos")

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();
  
  useEffect(() => {
    if (urlParams.id_game === undefined) {
         // function Fecth para setear los datos de la consulta
         firestoreFetch()
              .then(consulta => setItems(consulta))
              .then(() => setLoading(true))
              .catch(error => console.log('Hubo un error en la consulta a la DB',error));
    } else {
         // function Fecth con parámetros para filtrar (campo y valor)
         firestoreFetchSome('id_game', urlParams.id_game)
         .then(consulta => setItems(consulta))
         .then(() => setLoading(false))
         .catch(error => console.log('Hubo un error en la consulta a la DB', error));
    }
}, [urlParams.id_game]);
   useEffect(() => {
     const firestoreFetch = async () => {
       const querySnapshot = await getDocs(collection(db, "juegos"));
       return querySnapshot.docs.map( document => ({
         id: document.id,
         ...document.data()
       }
       ))
     }
     firestoreFetch()
     .then(result => setItems(result))
     .then(() => setLoading(false))
     .catch(err => console.log(err))
   }, [urlParams.id_game]);

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        {loading ? (
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif"
            alt="Cargando..."
          ></img>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  );
};
export default ItemListContainer;
