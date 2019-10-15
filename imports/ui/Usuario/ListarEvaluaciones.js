import React, { Component } from 'react';
import Evaluaciones from "../../api/evaluaciones";
import objetos from '../../api/objetos';



class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        evaluaciones: Evaluaciones.find({ _idUsuario: this.props.idUsuario })
    }


    render() {
        return (
            <div>
                {this.state.evaluaciones.map((e, i) => {
                    console.log(e.fecha.toJSON());
                    return (
                        
                        <div key={i} className="card">
                            <h5 className="card-header">{e.fecha.toJSON()}</h5>
                            <div className="card-body">
                                <h6 className="card-title">Planetas Consumidos: {e.planetas}</h6>
                            </div>
                        </div>
                    );
                })
                }

            </div>
        );
    }
}

export default ListarEvaluaciones;