import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    
    start = () => {
        console.log('INICIAR! LLEVAR AL LOGIN O A CALCULAR HUELLA SI YA ESTÁ LOGUEADO');
    }

    render() { 
        return (
            <div className="container host d-flex align-items-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 text-left my-5 my-md-0">
                        <h2>¡Calcula tu huella y compite con tus amigos!</h2>
                        <p className="py-4 text-muted">
                            La mejor forma de saber cuál es tu huella de carbono de lo que usas a diario.
                        </p>
                        <div className="d-flex justify-content-end">
                            <button className="but-outline" onClick={this.start}>Inicia Ahora</button>
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