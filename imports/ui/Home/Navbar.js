import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="fixed-top navbar navbar-expand-md bg-white shadow navbar-light">
                <Link className="navbar-brand d-flex align-items-center ml-3" to="/">
                    <img src="img/leaf.svg" className="d-inline-block mr-2" width="45" height="45" alt="LeafStyle logo" />
                    <span className="prefix">Leaf</span>Style
                </Link>
                <button className="navbar-toggler mr-md-4" type="button" data-toggle="collapse" data-target="#thebar" aria-controls="thebar" aria-expanded="false" aria-label="Toggle Navigation Menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="thebar" className="collapse navbar-collapse justify-content-end mr-md-4">
                    <ul className="navbar-nav ml-0 align-items-end">
                        <li className="nav-item mx-md-2"><Link to="/" className="nav-link">Inicio</Link></li>
                        <li className="nav-item dropdown ml-5">
                            <button className="but-solid" id="drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Entrar
                            </button>
                            <div className="dropdown-menu dropdown-menu-sm-right" aria-labelledby="drop">
                                <Link className="dropdown-item" to="/login">Ingresar</Link>
                                <Link className="dropdown-item" to="/registrarse">Registrarse</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;