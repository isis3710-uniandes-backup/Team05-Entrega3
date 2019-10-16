import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { toast } from 'react-toastify';
import Usuarios from '/imports/api/usuarios';

import './Usuario.css';
import ListarEvaluaciones from './ListarEvaluaciones';
import ListarAmigos  from "./ListarAmigos";

class Perfil extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: this.props.getUsuario()
        }
        
        this.handleCerrarSesion = this.handleCerrarSesion.bind(this);
    }

    handleCerrarSesion(event) {
        event.preventDefault();
        this.props.removeUsuario();
        toast.success('¡Vuelve pronto 😊!');
    }

    render() {
        return (
            <div className="container host">
                <div className="row">
                    <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center align-items-center fijo">
                        <img className="rounded-circle img-perfil" alt="Imagen del usuario" src={this.state.usuario.imagen} />
                        <h2 className="place mt-3">
                            Puesto {this.props.puesto}
                        </h2>
                        <p className="perf">
                            {this.state.usuario.nombre}
                        </p>
                        <p className="perf text-muted">
                            @{this.state.usuario.nombreUsuario}
                        </p>
                        <p className="perf">
                            {this.state.usuario.correo}
                        </p>
                        <button onClick={this.handleCerrarSesion} type="button" className="btn btn-danger btn-block my-3">Cerrar sesión</button>
                    </div>
                    <div className="col-12 col-md-8 offset-md-4">
                        <div className="row flex-column justify-content-between align-items-center">
                            <div className="col-12">
                                <ListarAmigos getUsuario={this.props.getUsuario} amigos={this.props.filtrada} />
                            </div>
                            <div className="col-12">
                                <ListarEvaluaciones getUsuario={this.props.getUsuario} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTracker(({ getUsuario }) => {
    
    let todos = Usuarios.find().fetch();
    let usr = getUsuario();
    todos = todos.filter(x => usr.amigos.includes(x.nombreUsuario) || usr._id === x._id);
    todos.sort( (a1, a2) => a1.ahorroActual - a2.ahorroActual);

    return {
        filtrada: todos,
        puesto: todos.findIndex((e) => e._id === usr._id) + 1
    };
})(Perfil);