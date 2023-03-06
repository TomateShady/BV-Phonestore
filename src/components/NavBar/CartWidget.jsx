import React from "react";
import './cartWidget.css';
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


 function CartWidget(){
    const miContext = useContext (cartContext);
    const checkItem = miContext.itemsInCart();
    return(
        <>
        <Link to="cart">
            <img className="logoCarrito" src="./imgs/CarritoDeCompras.png" alt="carritoDeCompras" />
            { checkItem !== 0 && <span>{checkItem}</span>}
        </Link>
        </>
    )
 }
 
 export default CartWidget;