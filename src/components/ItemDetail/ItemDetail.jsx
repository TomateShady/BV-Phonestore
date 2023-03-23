import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import MyButton from "../myButtonFolder/MyButton";
import "./itemdetail.css";

function ItemDetail ({ data }) {
    const [isInCart, setIsInCart] = useState(false);

    const { addToCart } = useContext(cartContext);

    function onAddToCart (count) {
        setIsInCart(count);
        addToCart(data, count);
    }

    return(
        <div className="card">
            <div className="card-img">
                <img src= {data.thumbnail} alt={data.title}/>
            </div>
            <div className="card-detail">
                <h3>{data.title}</h3>
                <p>{data.category}</p>
                <p>${data.price}</p>
                {
                    isInCart ?
                    <Link to="/cart">
                       <MyButton>Ir al carrito</MyButton>
                    </Link>
                    :
                    <ItemCount onAddToCart={onAddToCart} stock={data.stock}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail;