import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart (data, count) {
        let itemExistente = cart.findIndex (
            ( itemInCart => itemInCart.ide === data.id)
        );

        let newCart = [...cart];
        
        if (itemExistente !== -1){
            newCart[itemExistente].count += count;
            setCart(newCart);
        }else { 
            data.count = count;
            newCart.push(data)
            setCart(newCart);
        }
    }

    function itemsInCart (){
        let total = 0;
        cart.forEach( itemInCart => total = total + itemInCart.count )
        return total;
    }

    function clear () {
        return setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    }

    function priceInCart() {
        let totalPrice = 0;
        cart.forEach((data) =>
            (totalPrice = totalPrice + (data.price * data.cantidad))
         );
         return totalPrice;
    }

    return (
        <cartContext.Provider value={ {cart, itemsInCart, addToCart, clear, priceInCart, removeItem} }>
            {children}
        </cartContext.Provider>
    )
}