import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

import './Auth.css';
import { getUsuario, insertUsuario } from "/imports/api/usuarios";

class Registrarse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            nombre: "",
            nombreUsuario: "",
            contrasenia: "",
            correo: ""
        }

        this.setName = this.setName.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setMail = this.setMail.bind(this);
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
        let b = this.state.nombre.length > 0 && this.state.nombreUsuario.length > 0 && this.state.correo.length > 0 && this.state.contrasenia.length > 5;
        return b;
    }

    setName(event) {
        let name = event.target.value;
        this.setState({ nombre: name });
    }
    setUsername(event) {
        let usr = event.target.value;
        this.setState({ nombreUsuario: usr });
    }
    setMail(event) {
        let corr = event.target.value;
        this.setState({ correo: corr });
    }
    setPassword(event) {
        let pass = event.target.value;
        this.setState({ contrasenia: pass });
    }

    handleSubmit(event) {
        event.preventDefault();

         // HACER QUE SE ASIGNE EL USUARIO !!!!
        let nuevo = {
            _id: this.state.nombreUsuario,
            nombre: this.state.nombre,
            nombreUsuario: this.state.nombreUsuario,
            imagen: "img/user.svg",
            contrasenia: this.state.contrasenia,
            correo: this.state.correo,
            ahorroActual: 0,
            amigos: []
        };
 
         let buscado = getUsuario({ _id: this.state.nombreUsuario, nombreUsuario: this.state.nombreUsuario });
         if (buscado) {
            toast.error('Ya existe un usuario con ese nombre de usuario 😓');
            event.target.nombreUsuario.value = "";
        }
        else {
            insertUsuario(nuevo.nombre, nuevo.nombreUsuario, nuevo.imagen, nuevo.contrasenia, nuevo.correo, nuevo.ahorroActual, nuevo.amigos);
            this.props.setUsuario(nuevo);
            toast.success(`¡Bienvenido ${nuevo.nombre} 😁!`);
            this.setRedirect();
         }
    }

    render() { 
        return (
            <div>
                {this.renderRedirect()}
                <div className="host d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center my-3">
                        <h2 className="font-weight-bold">Registrarse</h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className="needs-validation reg">
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input id="nombre" className="form-control" autoFocus type="text" value={this.state.nombre} onChange={this.setName} placeholder="(Ejemplo: David Forero)" required />
                            <div className="invalid-feedback">¡Debes ingresar tu nombre completo!</div>
                        </div>
                        <div className="form-group">
                            <label>Nombre de Usuario</label>
                            <input id="nombreUsuario" className="form-control" type="text" value={this.state.nombreUsuario} onChange={this.setUsername} placeholder="(Ejemplo: dforer10)" required />
                            <small id="nombreUsuarioHelp" className="form-text text-muted">Si ya existe ese nombre de usuario, deberás cambiarlo.</small>
                            <div className="invalid-feedback">¡Debes ingresar tu nombre de usuario!</div>
                        </div>
                        <div className="form-group">
                            <label>Correo</label>
                            <input id="correo" className="form-control" type="email" value={this.state.correo} onChange={this.setMail} placeholder="(Ejemplo: dforero@leafstyle.com)" required />
                            <div className="invalid-feedback">¡Debe ingresar un correo o un correo válido!</div>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input className="form-control" id="contrasenia" type="password" minLength="6" value={this.state.contrasenia} onChange={this.setPassword} placeholder="Ingrese su contraseña" required />
                            <small id="contraseniaHelp" className="form-text text-muted">Debe tener al menos 6 caracteres.</small>
                        </div>
                        <button className="but-solid d-block mx-auto mt-2" type="submit" disabled={!this.validate()}>Registrarse</button>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/login" className="text-muted"><small>¿Estás registrado? ¡Ingresa ahora!</small></Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Registrarse;