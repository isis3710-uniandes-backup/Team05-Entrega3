import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Categorias from "../api/categorias";

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
              <div key={i} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{cat.nombre}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. {cat._id}
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a
                    href="#"
                    className="card-link"
                    onClick={_ => this.handleDelete(cat._id)}
                  >
                    Eliminar
                  </a>
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
