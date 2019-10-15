import React, { Component } from 'react';
import Usuarios from '/imports/api/usuarios';

class Perfil extends Component {
    
    constructor(props) {
        super(props);

    }
    
    render() { 
        return ( 
            <div className="container host">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-5 mr-0 mr-md-3">
                        {/* Aquí va el perfil (datos) del usuario */}
                        
                    </div>
                    <div className="col-12 col-md-7 ml-0 ml-md-3">
                        {/* Aquí van sus amigos listados */}

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Perfil;