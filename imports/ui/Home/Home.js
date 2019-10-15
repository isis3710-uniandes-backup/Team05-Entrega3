import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * Revisa si el usuario está registrado para llevarlo a calcular la huella o a loguearse
     */
    revisarUsuario() {
        // La dirección a donde lo manda dependiendo de si está logueado o no 
        // Se mira si está logueado y se cambia la dirección a donde lo manda
        let direccion = this.props.getUsuario()? '/evaluacion' : '/login' ;

        return (
            <Link to={direccion}>
                <button className="but-outline">Inicia Ahora</button>
            </Link>
        );
    }

    render() { 
        return (
            <div className="container host d-flex align-items-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 text-left my-5 my-md-0">
                        <h2 className="font-weight-bold">¡Calcula tu huella y compite con tus amigos!</h2>
                        <p className="py-4 text-muted">
                            La mejor forma de saber cuál es tu huella de carbono de lo que usas a diario.
                        </p>
                        <div className="d-flex justify-content-end">
                            {this.revisarUsuario()}
                        </div>                        
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img className="banner my-5 my-md-0" src="https://i.postimg.cc/85VcV8yM/plant.png" alt="Imagen de una planta pequeña" />
                    </div>
                </div>
            </div>
        );
    }
}