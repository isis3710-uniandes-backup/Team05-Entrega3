import React, { Component } from 'react';

class ListarAmigos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            busqueda: ""
        }

        this.filtrar = this.filtrar.bind(this);
    }

    filtrar(event) {

    }

    validate() {
        return this.state.busqueda.length > 0;
    }

    render() { 
        return ( 
            <div className="host">
                <div className=""></div>
                <input id="buscarAmigos" autoFocus type="text" value={this.busqueda} onChange={this.filtrar} />
                <button className="but-solid" disabled={!this.validate()}>Buscar</button>
                <div>

                </div>
            </div>
        );
    }
}
 
export default ListarAmigos;