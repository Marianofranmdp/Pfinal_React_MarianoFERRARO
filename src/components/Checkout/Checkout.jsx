import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
const Checkout = () => {
    return (
         <>
              <Button size="large" variant="contained" color="success">
                   <Link className="a" to='/cart' >Checkout</Link>
              </Button>
         </>
    )
}

export default Checkout;