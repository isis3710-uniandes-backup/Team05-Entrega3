import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {

    render() { 
        return ( 
            <div className="host d-flex flex-column align-items-center justify-content-center">
                <img id="notfound" src="img/notfound.png" alt="Interrogación página no encontrada" />
                <h1 className="brown font-weight-bold">404</h1>
                <h2 className="font-weight-bold">Página no encontrada</h2>
                <div className="text-center my-2">
                    <p>La página a la cual intentaste acceder no existe.</p>
                    <p>¿Quizá escribiste mal la dirección?</p>
                </div>
            </div>
        );
    }
}
 
export default NotFound;