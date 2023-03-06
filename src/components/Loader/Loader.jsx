import React from "react";
import { ThreeBody } from '@uiball/loaders';
import "./loader.css";

function Loader(){
    return(
        <div className="cargando">
            <ThreeBody size={105} speed={2} color="black"/>
        </div>
    );
}

export default Loader;