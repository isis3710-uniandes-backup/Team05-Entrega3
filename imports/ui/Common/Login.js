import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import './Auth.css';
import { getUsuario } from '/imports/api/usuarios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreUsuario: "",
            contrasenia: "",
            redirect: false
        }

        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    setRedirect() {
        this.setState({
          redirect: true
        })
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

        let buscado = getUsuario({ _id: usr, nombreUsuario: usr, contrasenia: pass });
        if (buscado) {
            this.props.setUsuario(buscado);
            toast.success(`¡Hola de nuevo ${buscado.nombre} 😁!`);
            this.setRedirect();
        }
        else {
            toast.error('Nombre de usuario o clave incorrectos 😓, ¿Los escribiste bien?');
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="host d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center my-3">
                        <h2 className="font-weight-bold">Ingreso</h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className="log">
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
            </div>
        );
    }
}

export default Login;