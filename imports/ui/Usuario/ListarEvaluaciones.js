import React, {Component} from 'react';
import Evaluaciones from "../../api/evaluaciones";



class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withTracker(() => {
    return {
      evaluaciones: Evaluaciones.find({_idUsuario: this.props.idUsuario})
    };
  })(Evaluacion);
