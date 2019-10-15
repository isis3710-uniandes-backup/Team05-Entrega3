import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Categorias from "../api/categorias";
import Objeto from "./Objeto.js";
import Objetos from "../api/objetos";

class Categoria extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    Categorias.remove({ _id: id });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.categorias.map((cat, i) => {
            return (
                <div key={i} className="card" style={{marginBottom: '2em'}}>
                  <h5 className="card-title mt-4 ml-4">{cat.nombre}</h5>
                  <div className="card-body">
                    <Objeto
                      idCategoria={cat._id}
                      _idReporte={this.props._idReporte}
                    />
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
    categorias: Categorias.find().fetch()
  };
})(Categoria);
