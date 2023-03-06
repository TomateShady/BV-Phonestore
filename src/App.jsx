import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
   <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainter/>} />
        <Route path='/category/:idCategory' element= { <ItemListContainter/> } />
        <Route path= '/detail/:idItem' element= { <ItemDetailContainer/>} />
        <Route path= '/cart' element= {<CartView/>} />
        <Route path= '/thankYou/:idOrder' element={<ThankYou/>} />
        <Route path="*" element = { <h1>Error 404: Esta página no existe </h1>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
