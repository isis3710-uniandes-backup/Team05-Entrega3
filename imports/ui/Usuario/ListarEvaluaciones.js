import React, {Component} from 'react';
import Evaluaciones from "../../api/evaluaciones";



class ListarEvaluaciones extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        objetos : this.props.objetos,
        id: Evaluaciones.find({_idReporte: this.props.getUsuario})
      }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ListarEvaluaciones;