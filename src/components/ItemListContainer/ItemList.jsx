import React from "react";
import Item from "./Item";


export default function ItemList({ data }){ 
    return(
        <div className='container'>
            {data.map((data) => { 
                return(
                    <Item
                    key= {data.id}
                    id= {data.id}
                    imgurl={data.thumbnail}
                    title={data.title}
                    category={data.category}
                    />
                );
             })}
        </div>
    );
 }
