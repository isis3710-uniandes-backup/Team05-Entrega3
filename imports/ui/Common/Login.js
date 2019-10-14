import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Usuarios from '/imports/api/usuarios';
import { toast } from 'react-toastify';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreUsuario: "",
            contrasenia: ""
        }

        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate() {
        return this.state.nombreUsuario.length > 0 && this.state.contrasenia.length > 0;
    }

    setUsername(event) {
        let usr = event.target.value;
        this.setState({ nombreUsuario: usr });
    }

    setPassword(event) {
        let pass = event.target.value;
        this.setState({ contrasenia: pass });
    }

    handleSubmit(event) {
        event.preventDefault();

        // HACER QUE SE ASIGNE EL USUARIO !!!!
        const usr = this.state.nombreUsuario;
        const pass = this.state.contrasenia;

        let buscado = Usuarios.findOne({ _id: usr, nombreUsuario: usr, contrasenia: pass });
        if (buscado) {
            this.props.setUsuario(buscado);
            toast.success(`¡Bienveni@ ${buscado.nombre} 😁!`);
        }
        else {
            toast.error('Nombre de usuario o clave incorrectos 😓, ¿Los escribiste bien?');
        }
    }

    render() {
        return (
            <div className="host d-flex flex-column justify-content-center align-items-center">
                <div className="text-center my-3">
                    <h2 className="font-weight-bold">Ingreso</h2>
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
                    <button className="but-solid d-block mx-auto" type="submit" disabled={!this.validate()}>Ingresar</button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/registrarse" className="text-muted"><small>¿Aún no tienes cuenta? ¡regístrate!</small></Link>
                </div>
            </div>
        );
    }
}

export default Login;