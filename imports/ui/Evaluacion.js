import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";
import Categoria from "../ui/Categoria";
import Objeto from "../ui/Objeto";

class Evaluacion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="host">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Categoria />
            </div>
            <div className="col-6">
              <button type="button" onClick={calcPuntos(Objeto.state.objetos)}>Calcular</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  calcPuntos(objetos){
    
  }

}




export default withTracker(() => {
  return {
    categorias: Evaluaciones.find().fetch()
  };
})(Evaluacion);