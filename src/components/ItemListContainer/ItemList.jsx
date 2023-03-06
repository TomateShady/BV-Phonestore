import React from "react";
import Item from "./Item";
import "./itemListContainer.css";

function ItemList({ productos }){ 
    return(
        <div className="container">
            {productos.map((productos) => { 
                return(
                    <Item
                    key= {productos.id}
                    id= {productos.id}
                    imgurl={productos.thumbnail}
                    title={productos.title}
                    category={productos.category}
                    />
                );
             })}
        </div>
    );
 }

 export default ItemList;