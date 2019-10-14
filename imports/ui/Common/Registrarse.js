import React, { Component } from 'react';

class Registrarse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            nombre: undefined,
            nombreUsuario: undefined,
            contrasenia: undefined, 
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate() {

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() { 
        return ( 
            <div className="host">
                <div className="text-center my-3">
                    <h2 className="font-weight-bold">Registrarse</h2>
                </div>
                <form onSubmit={this.handleSubmit} style={{ width: "300px" }}>
                    <div className="form-group">
                        <label>Nombre de Usuario</label>
                        <input id="nombreUsuario" className="form-control" autoFocus type="text" value={this.state.nombreUsuario} onChange={this.setUsername} placeholder="Ingrese su nombre de usuario" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input className="form-control" id="contrasenia" type="password" value={this.state.contrasenia} onChange={this.setPassword} placeholder="Ingrese su contraseña" />
                    </div>
                    <button className="but-solid d-block mx-auto mt-2" type="submit" disabled={!this.validate()}>Ingresar</button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/login" className="text-muted"><small>¿Estás registrado? ¡Ingresa ahora!</small></Link>
                </div>
            </div>
        );
    }
}
 
export default Registrarse;