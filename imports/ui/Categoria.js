import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Categorias from "../api/categorias";
import Objeto from "./Objeto.js";

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
            return (
              <div key={i} className="card">
                <h5 className="card-header">{cat.nombre}</h5>
                <div className="card-body">
                  <Objeto idCategoria={cat._id}/>
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
