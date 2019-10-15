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
            usuario: this.props.getUsuario(),
            puesto: 1,
            filtrada: []
        }
        
        this.handleCerrarSesion = this.handleCerrarSesion.bind(this);
    }

    componentWillMount() {
        console.log(this.props.todos);
        let usr = this.props.getUsuario();
        let f = this.props.todos.filter(x => usr.amigos.includes(x.nombreUsuario) || usr._id === x._id);
        f.sort( (a1, a2) => a1.ahorroActual - a2.ahorroActual);
        console.log(f);
        this.setState({ 
            puesto: f.findIndex((e) => e._id === usr._id) + 1,
            filtrada: f
        });
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
                    <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
                        <img className="rounded-circle img-perfil" alt="Imagen del usuario" src={this.state.usuario.imagen} />
                        <hr />
                        <h2 className="place mt-3">
                            Puesto {this.state.puesto}
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
                    <div className="col-12 col-md-8">
                        <div className="row flex-column justify-content-between align-items-center">
                            <div className="col-12">
                                <ListarAmigos getUsuario={this.props.getUsuario} amigos={this.state.filtrada} />
                            </div>
                            <div className="col-12">
                                <ListarEvaluaciones idUsuario={this.state.usuario._id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
      todos: Usuarios.find().fetch(),
    };
  })(Perfil);