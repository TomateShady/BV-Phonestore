import React from 'react';
import { useState, useEffect } from "react";
import "./itemListContainer.css";
import ItemList from './ItemList';
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

 export default function ItemListContainer(){
    const [ data, setData ] = useState(null);
    const { idCategory } = useParams();
    
    async function getItemsAsync(){ 
        if(!idCategory){ 
            let respuesta = await getItems();
            setData(respuesta);
         }
         else{ 
            let respuesta = await getItemsByCategory(idCategory)
            setData(respuesta);
          }
     }

     useEffect(() => { 
        getItemsAsync();
       
      }, [idCategory]);


    return (
        <>
        {data ? <ItemList data = {data}/> : <Loader /> }
        </>
    );  
}
