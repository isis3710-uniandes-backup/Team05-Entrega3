import React, { Component } from 'react';

class Usuario extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container host">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        {/* Aquí va el perfil (datos) del usuario */}
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Aquí van sus amigos listados */}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Usuario;