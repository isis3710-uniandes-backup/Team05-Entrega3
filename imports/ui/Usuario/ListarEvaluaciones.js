import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../../api/evaluaciones";
import objetos from '../../api/objetos';

class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

        this.state = {
            evaluaciones: this.props.evaluaciones
        }
    }

    render() {
        return (
            <div className="p-md-3">
                <div className="row my-4">
                    <img
                        src="https://www.pinclipart.com/picdir/big/112-1128532_eco-green-tree-png-clipart-transparent-png.png"
                        alt="Logo para mostrar las evaluaciones realizadas."
                        className="rounded-circle"
                        height="40"
                        width="40"
                        style={{display:"inline-block", verticalAlign:"middle"}}
                    />
                    <h3 class="font-weight-bold ml-3" style={{display:"inline-block", verticalAlign:"middle"}}>Tus Evaluaciones</h3>
                </div>
                <ul className="list-group list-group-flush mb-5">
                    {this.state.evaluaciones.map((e, i) => {
                        if (this.props.idUsuario === e._idUsuario) {
                            return (
                                <li key={i}
                                    className="list-group-item d-flex flex-md-row flex-column justify-content-between align-items-center">
                                    <strong><h5>Planetas: {e.planetas.toFixed(3)}  </h5></strong>
                                    <strong><h5>Fecha:</h5></strong>
                                    <strong max-width="150px"><h5>{e.fecha.getFullYear()}/{e.fecha.getMonth()}/{e.fecha.getDate()}</h5></strong>
                                    <strong><h5>Hora:</h5></strong>
                                    <strong max-width="150px"><h5>{e.fecha.getHours()}:{e.fecha.getMinutes()}</h5></strong>
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