import React, { Component } from 'react';

import './Usuario.css';
import Usuarios from '/imports/api/usuarios'

class ListarAmigos extends Component {
    
    constructor(props) {
        super(props);

        let f = this.props.amigos.filter(x => this.props.getUsuario().amigos.includes(x._id) || this.props.getUsuario()._id === x._id);
        this.state = {
            busqueda: "",
            lista: f,
            original: f
        }

        this.filtrar = this.filtrar.bind(this);
    }
    
    filtrar(event) {
        const b = event.target.value;
        let filtrado = this.state.original.filter(x => x._id.includes(b));
        this.setState({ 
            busqueda: b,
            lista: filtrado
         });
    }

    listarAmigos() {
        let ordenada = this.state.lista.sort( (a1, a2) => a1.ahorroActual - a2.ahorroActual);
        return ordenada.map( (e,i) => {
            return (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    <img src={e.imagen} alt="Imagen de Perfil" className="rounded-circle" height="55" width="55" />
                    <span className="place">{ i+1 }</span>
                    <span>{e.nombre}</span>
                    <span>{e.nombreUsuario}</span>
                    <span>{e.ahorroActual}</span>
                </li>
            );
        });
    }

    render() { 
        return ( 
            <div className="host">
                <div className="my-4 buscador">
                    <input className="form-control" id="buscarAmigos" autoFocus type="text" value={this.state.busqueda} onChange={this.filtrar} placeholder="Busca por nombre de usuario" />
                </div>
                <ul className="list-group list-group-flush">
                    {this.listarAmigos()}
                </ul>
            </div>
        );
    }
}
 
export default withTracker(() => {
    return {
      amigos: Usuarios.find().fetch(),
    };
  })(ListarAmigos);;