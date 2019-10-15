import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../../api/evaluaciones";
import objetos from '../../api/objetos';

class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        evaluaciones: this.props.evaluaciones
    }

    render() {
        return (
            <div>
                {this.state.evaluaciones.map((e, i) => {
                    console.log(this.props);
                    console.log(Date(e.fecha));
                    if(this.props.idUsuario === e._idUsuario){
                    return (
                        <div key={i} className="card">
                            <h5 className="card-header">Planetas Consumidos: {e.planetas}</h5>
                            <div className="card-body">
                                <p className="card-title">Fecha: {Date(e.fecha)} </p>
                            </div>
                        </div>
                    );
                    }
                })
                }

            </div>
        );
    }
}

export default withTracker(() => {
    return {
        evaluaciones: Evaluaciones.find().fetch()
    };
})(ListarEvaluaciones);