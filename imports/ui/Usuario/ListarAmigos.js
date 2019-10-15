import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from "meteor/react-meteor-data";

import './Usuario.css';

class ListarAmigos extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            busqueda: ""
        }

        this.filtrar = this.filtrar.bind(this);
    }

    filtrar(event) {
        const b = event.target.value;
        this.setState({ 
            busqueda: b
        });
    }

    listarAmigos() {
        return this.props.filtrar(this.state.busqueda).map( (e,i) => {
            return (
                <li key={i} className="list-group-item d-flex d-flex flex-md-row flex-column justify-content-between align-items-center">
                    <img src={e.imagen} alt="Imagen de Perfil" className="rounded-circle" height="55" width="55" />
                    <span className="place">{ i+1 }</span>
                    <span>{e.nombre}</span>
                    <span>{e.nombreUsuario}</span>
                    <span>{e.ahorroActual.toFixed(3)}</span>
                </li>
            );
        });
    }

    noTieneAmigos() {
        let res = this.props.filtrar(this.state.busqueda);
        if(res.length === 1 && res[0]._id === this.props.getUsuario()._id) {
            return (
                <li className="list-group-item d-flex d-flex flex-md-row flex-column justify-content-between align-items-center">
                    <p className="">Parece que aún no tienes rivales. <Link to='/personas'>¡Añade Unos cuantos!</Link></p>
                </li>
            );
        }
    }

    render() { 
        return ( 
            <div className="p-md-3">
                <h3 className="font-weight-bold">Tus Rivales</h3>
                <div className="my-4 buscador">
                    <input className="form-control" id="buscarAmigos2" autoFocus type="text" value={this.state.busqueda} onChange={this.filtrar} placeholder="Busca por nombre de usuario" />
                </div>
                <ul className="list-group list-group-flush">
                    {this.listarAmigos()}
                    {this.noTieneAmigos()}
                </ul>
            </div>
        );
    }
}
 
export default withTracker(({ amigos }) => {
  
    return {
      filtrar: (busqueda) => {
        return amigos.filter(x => x._id.includes(busqueda));
      }
    };
  })(ListarAmigos);