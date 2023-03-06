import React from 'react';
import CartWidget from './CartWidget';
import './navbar.css';
import {Link} from "react-router-dom";

function NavBar() {
    return(
        <nav id='navegador'>
             <Link to="/"><h1>B&V Phonestore</h1></Link>
            <div className="navGroupList">
                <ul className="productos">
                    <li>
                       <Link to="/category/smartphone"> Smartphones </Link> 
                    </li>
                    <span>/</span>
                    <li>
                        MacBooks
                    </li>
                    <span>/</span>
                    <li>
                        AirPods
                    </li>
                    <span>/</span>
                    <li>
                        Cargadores
                    </li>
                    <li>
                         <CartWidget /> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;