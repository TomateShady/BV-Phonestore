import { useState, useEffect } from "react";
import React from "react";
import { getSingleItem } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Loader from "../Loader/Loader";

function ItemDetailContainer() { 
    const [ data, setData ] = useState ({});
    const [ isLoading, setIsLoading ] = useState(true);
    const { idItem } = useParams();

    useEffect(()=>{
        async function getItemsAsync(){
            let respuesta = await getSingleItem(idItem);
            setData (respuesta);
            setIsLoading(false);
        }
        getItemsAsync()
    }, [idItem])

    if (isLoading)
    return(<Loader/>)

    return(
        <ItemDetail data={data} />
    )
 }

 export default ItemDetailContainer;