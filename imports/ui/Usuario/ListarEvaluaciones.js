import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { Link } from 'react-router-dom';

import Evaluaciones from "../../api/evaluaciones";
import objetos from '../../api/objetos';

class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="p-md-3">
                <div className="row my-4">
                    <h3 className="font-weight-bold ml-3">Tu Historial de Huellas</h3>
                </div>
                <ul className="list-group list-group-flush mb-5">
                    {
                        (this.props.evaluaciones.length === 0) ?
                        <p>Parece que aún no tienes evaluaciones. <Link to='/evaluacion'>¡Ve y genera una!</Link></p> :
                        this.props.evaluaciones.map((e, i) => {
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
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withTracker(({ getUsuario }) => {
    let e = Evaluaciones.find().fetch()
    let usr = getUsuario();
    return {
        evaluaciones: e.filter(x => usr._id === x._idUsuario)
    };
})(ListarEvaluaciones);