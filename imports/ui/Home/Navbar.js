import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

class Navbar extends Component {
    
    constructor(props) {
        super(props);

        this.salir = this.salir.bind(this);
    }

    verUsuarios() {
        if(this.props.getUsuario()) {
            return (
                <li className="nav-item mx-md-2"><Link to="/personas" className="nav-link">Personas</Link></li>
            );
        }
    }

    salir() {
        this.props.removeUsuario();
        toast.success('¡Vuelve pronto 😊!');
    }
    
    revisarLogin() {
        if(this.props.getUsuario()) {
            return (
                <li className="nav-item dropdown ml-5">
                    <div id="drop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="rounded-circle profilePic" src={this.props.getUsuario().imagen} width="45" height="45" />
                    </div>
                    <div className="dropdown-menu dropdown-menu-sm-right" aria-labelledby="drop">
                        <Link className="dropdown-item" to="/perfil">Mi Perfil</Link>
                        <Link className="dropdown-item" to="/" onClick={this.salir}>Salir</Link>
                    </div>
                </li>
            );
        }
        else {
            return (
                <li className="nav-item dropdown ml-5">
                    <div className="but-solid" id="drop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entrar
                    </div>
                    <div className="dropdown-menu dropdown-menu-sm-right" aria-labelledby="drop">
                        <Link className="dropdown-item" to="/login">Ingresar</Link>
                        <Link className="dropdown-item" to="/registrarse">Registrarse</Link>
                    </div>
                </li>
            );
        }
    }

    render() { 
        return ( 
            <nav className="fixed-top navbar navbar-expand-md bg-white shadow navbar-light">
                <Link className="navbar-brand d-flex align-items-center ml-3" to="/" title="Inicio">
                    <img src="img/leaf.svg" className="d-inline-block mr-2" width="45" height="45" alt="LeafStyle logo" />
                    <span className="prefix">Leaf</span>Style
                </Link>
                <button className="navbar-toggler mr-md-4" type="button" data-toggle="collapse" data-target="#thebar" aria-controls="thebar" aria-expanded="false" aria-label="Toggle Navigation Menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="thebar" className="collapse navbar-collapse justify-content-end mr-md-4">
                    <ul className="navbar-nav ml-0 align-items-end">
                        <li className="nav-item mx-md-2"><Link to="/" className="nav-link">Inicio</Link></li>
                        {this.verUsuarios()}
                        {this.revisarLogin()}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;