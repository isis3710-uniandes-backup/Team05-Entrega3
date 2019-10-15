import React, { Component } from "react";
import { toast } from "react-toastify";
import Objetos from "../api/objetos";
import { withTracker } from "meteor/react-meteor-data";


import "./Objeto.css";

class Objeto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objetos: this.props.objetos.filter( ob => ob._idCategoria === this.props.idCategoria ) || []
    };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disable = this.disable.bind(this);
  }


  handleNumber(x, i) {
    var newObjeto = this.state.objetos[i];
    newObjeto.cantidad = x.target.value;
    this.setState((this.state.objetos[i] = newObjeto));
  }

  handleSubmit(objetoNuevo) {
    objetoNuevo.show = false;
    var obj = objetoNuevo;
    var x = this.props._idReporte;
    obj._idReporte = x;
    obj._idCategoria = 0;
    delete obj["_id"];
    delete obj["show"];
    Objetos.insert(obj);
    toast.success(
      "Agregaste un uso de " +
        objetoNuevo.cantidad +
        " " +
        objetoNuevo.unidad +
        " de " +
        objetoNuevo.nombre
    );
  }

  disable(i) {
    this.state.objetos[i].hide = true;
  }

  render() {
    return (
      <div className="card-deck">
        {this.state.objetos ? (
          <React.Fragment>
            {this.state.objetos.map((obj, i) => {
              return (
                <div
                  key={i}
                  className="ob card mt-2 ml-2"
                >
                  <div className="card-body">
                    <h5 className="card-title">{obj.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Peso: {obj.peso}
                    </h6>
                    <p className="card-text text-wrap">{obj.descripcion}</p>
                    <div className="form-group">
                      <input
                        type="number"
                        name="quantity"
                        className="form-control resize d-inline-block"
                        min="1"
                        value={this.state.objetos[i].cantidad}
                        onChange={e => {
                          this.handleNumber(e, i);
                        }}
                      />
                      <label className="d-inline-block"> {obj.unidad}</label>
                    </div>
                    <button
                      className="but-solid"
                      onClick={() => {
                        this.handleSubmit(this.state.objetos[i]);
                        this.disable(i);
                      }}
                      style={{ marginTop: "3%" }}
                      disabled={this.state.objetos[i].hide}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <p>No hay objetos</p>
        )}
      </div>
    );
  }
}

export default withTracker(() => {
    return {
      objetos : Objetos.find().fetch()
    };
  })(Objeto);
