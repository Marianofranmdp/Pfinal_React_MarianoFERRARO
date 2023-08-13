import ItemCount from "../ItemCount/ItemCount";
import Checkout from "../Checkout/Checkout"
import { useContext, useState } from 'react';
import { CartContext } from "../../Context/CartContext";
import {Button, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemDetails = ( {items} ) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isCheckout, setIsCheckout] = useState(false);
  const test = useContext(CartContext);

  const onAdd = (quantity) => {
       alert(`${quantity} Units successfully added to cart`);
    //    console.log(quantity);
       setItemQuantity(quantity);
      setIsCheckout(true);
      test.addToCart(items,quantity);
  }
  return (
    <>
        <div
            className="container d-flex justify-content-end m-auto align-items-center row mt-5">
            <div className="text-center col-6">
                <div className="d-block">
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img className="img_details" src={items.thumb} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="img_details" src={items.thumb2} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="cardDetails text-center col-6">
                <div className="card-body">
                    <h2 className="card-text text-uppercase fs-5"><b>{items.title}</b></h2>
                    <h6 className="card-text mt-3"><b>Precio: </b>$ {items.normalPrice}</h6>
                    <br />
                    <p className="textDetail">{items.description}</p>
                    <div>
                    {isCheckout ?
                    <Checkout className="" cantidad={itemQuantity}></Checkout>
                    :
                    <ItemCount stock={items.stock} initial={itemQuantity} onAdd={onAdd}></ItemCount>}
                    <Link to="/"><Button variant="dark m-3">Volver a Home</Button></Link>
                    </div>
                </div>
                
            </div>
        </div>  
    </>
  );
};

export default ItemDetails;
