import React, { Component } from 'react';
import Usuarios from '/imports/api/usuarios';

import './Perfil.css';
import ListarEvaluaciones from './ListarEvaluaciones';

class Perfil extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container host">
                <div className="row justify-content-center align-items-center">
                    {/* <div className="col-4 col-md-5 mr-0 mr-md-3"> */}
                    <div className="col-5">
                        <div className="container host">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img className="rounded-circle" alt="100x100" src={this.props.getUsuario().imagen}
                                        data-holder-rendered="true"></img>
                                    <p className="puesto">
                                        Puesto #1
                                    </p>
                                    <p className="nombre">
                                        {this.props.getUsuario().nombre}
                                    </p>
                                    <p className="nombre-usuario">
                                        @{this.props.getUsuario().nombreUsuario}
                                    </p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col">
                                    <p className="profile-body">
                                        Nombre de usuario: {this.props.getUsuario().nombreUsuario}
                                    </p>
                                    <p className="profile-body">
                                        Correo: {this.props.getUsuario().correo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-8 col-md-7 ml-0 ml-md-3"> */}
                    <div className="col">
                        {/* Aquí van sus amigos listados */}
                    </div>
                    <div className="col">
                        {/* Aquí van sus amigos listados */}
                            <ListarEvaluaciones idUsuario = {this.props.getUsuario()._id}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perfil;