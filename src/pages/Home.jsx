import { BrowserRouter, Route, Routes } from "react-router-dom";
import logoMenu from "../assets/iconMenu.png";
import NavBar from "../components/NavBar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemDetailsContainer"
import Cart from "../components/Cart/Cart"
import CartContextProvider from "../Context/CartContext"
const Home = () => {
    return (
         <CartContextProvider>
          <BrowserRouter>
               <NavBar logoMenu={logoMenu} alt='logoMenu' />
               <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id_game" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailsContainer />} />
                    <Route path="/cart" element={<Cart />} />
               </Routes>
          </BrowserRouter>
        </CartContextProvider>
   )
};

export default Home;
