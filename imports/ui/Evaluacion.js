import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";
import Categoria from "../ui/Categoria";
import Objeto from "../ui/Objeto";

class Evaluacion extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    objetos : this.props.objetos
  }

  render() {
    let id = Evaluaciones.insert({fecha: new Date(), planetas: -1, _idUsuario: null, _idEvaluacionAnterior: null })
    return (
      <div className="host">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Categoria id_Reporte= {id} />
            </div>
            <div className="col-6">
              <button type="button" onClick={() => {
                this.calcPuntos(id)
              }}>Calcular</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  calcPuntos() {
    let sum = 0;
    Evaluaciones.findOne(id);
    objetos.map((obj, i) => {
      sum += obj.peso;
      console.log(sum);
    })
  }

}




export default withTracker(() => {
  return {
    evaluaciones: Evaluaciones.find().fetch()
  };
})(Evaluacion);