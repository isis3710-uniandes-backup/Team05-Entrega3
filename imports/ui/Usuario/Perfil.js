import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Usuarios from '/imports/api/usuarios';
import { toast } from 'react-toastify';


import './Perfil.css';
import ListarEvaluaciones from './ListarEvaluaciones';

class Perfil extends Component {

    constructor(props) {
        super(props);

        this.handleCerrarSesion = this.handleCerrarSesion.bind(this)

        this.state = {
            redirect: false
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    setRedirect() {
        this.setState({
            redirect: true
        })
    }

    handleCerrarSesion() {
        this.props.removeUsuario()
        this.setRedirect()
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="container host">
                    <div className="row justify-content-center align-items-center">
                        {/* <div className="col-4 col-md-5 mr-0 mr-md-3"> */}
                        <div className="col-5">
                            <div className="container host">
                                <div className="row justify-content-center">
                                    <div className="col text-center">
                                        <img className="rounded-circle" alt="100x100" src={this.props.getUsuario().imagen}
                                            data-holder-rendered="true"></img>
                                        <div className="puesto">
                                            Puesto #1
                                        </div>
                                        <div className="nombre">
                                            {this.props.getUsuario().nombre}
                                        </div>
                                        <div className="nombre-usuario">
                                            @{this.props.getUsuario().nombreUsuario}
                                        </div>
                                        <div className="correo">
                                            {this.props.getUsuario().correo}
                                        </div>
                                        <div className="pt-2">
                                            <button onClick={this.handleCerrarSesion}><link to="/"></link>Cerrar sesión</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-8 col-md-7 ml-0 ml-md-3"> */}
                        <div className="col-7">
                            {/* Aquí van sus amigos listados */}
                            <ListarEvaluaciones idUsuario={this.props.getUsuario()._id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perfil;