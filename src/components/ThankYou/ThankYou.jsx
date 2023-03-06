import React from "react";
import { useParams } from "react-router-dom";
import "./thankYou.css";

function ThankYou() {
    const idOrder= useParams().idOrder;
    return(
    <div className="gracias">
        <h1>¡Gracias por tu compra!</h1>
        <h3>El id de tu compra es: {idOrder}</h3>
    </div>
    )
}

export default ThankYou;