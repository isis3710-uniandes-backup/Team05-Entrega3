import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Categorias from "../api/categorias";
import Objeto from "./Objeto.js";
import objetos from "../api/objetos";

class Categoria extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    Categorias.remove({_id: id})
  }

  render() {
    return (
      <div>
        <div>
          {this.props.categorias.map((cat, i) => {
            console.log('Categorias');
            console.log(this.props.categorias);
            return (
              <div key={i} className="card">
                <h5 className="card-header">{cat.nombre}</h5>
                <div className="card-body">
                  <Objeto idCategoria={cat._id} _idReporte = {this.props._idReporte} objetos ={this.props.objetos}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    categorias: Categorias.find().fetch(),
    objetos : objetos.find().fetch()
  };
})(Categoria);
