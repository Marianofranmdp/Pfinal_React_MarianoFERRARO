import {createContext, useState} from "react"
// import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
// import db from "../utils/firebaseConfig";

 export const CartContext = createContext();

 const CartContextProvider = ({children}) => {
     const [cartList, setCartList] = useState([]);

     const addToCart = (item, quantity) =>{
         let found = cartList.find(products => products.id === item.id);
         if (found === undefined){
            setCartList([ 
                ...cartList,{
                   key:item.id,
                 id: item.id,
                 category:item.category,
                 title: item.title,
                 thumb:item.thumb,
                 normalPrice:item.normalPrice,
                 qty: quantity
               }])
               
         } else {
             found.qty += quantity
             setCartList([...cartList])
         }
         
     }
    const deleteProduct = (id) =>{
        setCartList(cartList.filter((item) => item.id !== id));
    }
    const clear = () =>{
        setCartList([]);
    }
//     const isInCart = (idProduct) => {
//         return cartList.find((item) => item.id === idProduct) ? true : false;
//    }
   const calcItemsQty = () => {
       let qtys = cartList.map(item => item.qty);
       return qtys.reduce(((previusValue, currentValue)=> previusValue + currentValue), 0)
   }
   const total_cost = () => {
    let total = 0;
    
    for (const products of cartList) {
         total = total + (products.normalPrice * products.qty);
         console.log(total);
    }
    return total;
}
     return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, clear, calcItemsQty,total_cost}}>
            {children}
        </CartContext.Provider>
     )
 }
 export default CartContextProvider;