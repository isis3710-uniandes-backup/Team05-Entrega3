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
            <div className="container host">
                <ul className="list-group">
                    {this.state.evaluaciones.map((e, i) => {
                        if (this.props.idUsuario === e._idUsuario) {
                            return (
                                <li key={i}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                    <h6>Planetas Consumidos</h6>
                                    <p max-width="150px">{e.planetas}</p>
                                    <h6>Fecha</h6>
                                    <p max-width="150px">{Date(e.fecha)} </p>
                                </li>
                            );
                        }
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        evaluaciones: Evaluaciones.find().fetch()
    };
})(ListarEvaluaciones);