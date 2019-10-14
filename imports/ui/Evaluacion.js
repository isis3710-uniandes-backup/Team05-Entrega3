import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";
import Categoria from "../ui/Categoria";
import Objeto from "../ui/Objeto";
import objs from "../api/objetos";

class Evaluacion extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    objetos : this.props.objetos,
    id: Evaluaciones.insert({fecha: new Date(), planetas: -1, _idUsuario: null, _idEvaluacionAnterior: null })
  }

  render() {
      return(<div className="host">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Categoria _idReporte= {this.state.id} />
            </div>
            <div className="col-6">
              <button type="button" onClick={() => {
                console.log(this.state.id);
                this.calcPuntos(this.state.id)
              }}>Calcular</button>
            </div>
          </div>
        </div>
      </div>
      );
  }

  calcPuntos(id) {
    let sum = 0;
    let objetos = objs.find({_idReporte: id});
    objetos.map((obj, i) => {
      sum += obj.peso;
      console.log(sum);
    });
  }

}




export default withTracker(() => {
  return {
    evaluaciones: Evaluaciones.find().fetch()
  };
})(Evaluacion);