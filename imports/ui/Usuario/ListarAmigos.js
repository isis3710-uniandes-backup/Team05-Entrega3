import React, { Component } from 'react';

import './Usuario.css';

class ListarAmigos extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            busqueda: "",
            lista: this.props.amigos
        }

        this.filtrar = this.filtrar.bind(this);
    }
    
    filtrar(event) {
        const b = event.target.value;
        let filtrado = this.props.amigos.filter(x => x._id.includes(b));
        this.setState({ 
            busqueda: b,
            lista: filtrado
         });
    }

    listarAmigos() {
        return this.state.lista.map( (e,i) => {
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

    render() { 
        return ( 
            <div className="p-md-3">
                <h3 className="font-weight-bold">Tus Rivales</h3>
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
 
export default ListarAmigos;