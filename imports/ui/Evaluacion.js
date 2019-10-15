import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";
import Categoria from "../ui/Categoria";
import categorias from "../api/categorias";
import objs from "../api/objetos";

class Evaluacion extends Component {
  constructor(props) {
    super(props);
  }

  state = {
  }

  render() {
    return (<div className="host">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Categoria _idReporte={this.props.id} />
          </div>
          <div className="col-6">
            <button type="button" onClick={() => {
              console.log(this.props.id);
              this.calcPuntos(this.props.id)
            }}>Calcular</button>
          </div>
        </div>
      </div>
    </div>
    );
  }

  calcPuntos(id) {
    let sum = 0;
    let categorias = [];
    let objetos = objs.find({ _idReporte: id }).fetch();

    objetos.map((obj, i) => {
      if (obj._idCategoria === '1') {
        categorias[0] += obj.peso;
      }
      else if (obj._idCategoria === '2') {
        categorias[1] += obj.peso;
      }
      else if (obj._idCategoria === '3') {
        categorias[2] += obj.peso;
      }
      else if (obj._idCategoria === '4') {
        categorias[3] += obj.peso;
      }
      sum += obj.peso;
      console.log(sum);
    });
  }

}

export default withTracker(() => {
  return {
    evaluaciones: Evaluaciones.find().fetch(),
    objetos: objs.find({}).fetch(),
    id: Evaluaciones.insert({ fecha: new Date(), planetas: -1, _idUsuario: null })
  };
})(Evaluacion);