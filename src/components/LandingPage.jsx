import React from "react";
import {Link} from "react-router-dom"


export default function Landing(){
    return (
        <div>
            <h1>Hola, gracias por el curso!</h1>
            <Link to="/home">
                <button> Home</button>
            </Link>
        </div>
    )
}