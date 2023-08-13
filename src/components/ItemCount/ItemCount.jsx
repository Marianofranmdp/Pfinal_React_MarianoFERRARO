import { useState } from "react";
import styles from "../ItemCount/ItemCount.module.css"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ItemCount = ({stock, initial, onAdd}) => {
   const [item, setItem] = useState(initial);
   const increment = () =>{
       if(item >= 1 && item < stock){
           setItem(item + 1)
       }
    }
    const decrese = () =>{
        if(item > 1){
            setItem(item - 1)
        }
    }
    return (
    <>  
    <div className={styles.container}>
        <div className={styles.controls}>
            <button className={styles.designe_btn} onClick={increment}>+</button>
            <div>{item}</div>
            <button className={styles.designe_btn}  onClick={decrese}>-</button>
        </div>
    <div className="counter">
        <Button endIcon={<AddShoppingCartIcon />} color="primary" variant="contained"size="large" onClick={() => onAdd(item)}>Add to cart
        </Button>
    </div>
    </div>
    <hr />
    </>
    );
}
export default ItemCount