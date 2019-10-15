import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Usuarios from "../../api/usuarios";
import './Usuario.css';

class ListarUsuarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amigos: this.props.getUsuario().amigos
    };

    this.handleFriend = this.handleFriend.bind(this);
  }

  handleFriend(username) {
    this.setState(prev => {
      return { amigos: [...prev.amigos, username] };
    });
    Usuarios.update(
      { _id: this.props.getUsuario()._id },
      { $push: { amigos: username } }
    );
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div className="container host">
          <h3 className="font-weight-bold my-5 pt-4">Con quién competir</h3>
          <ul className="list-group list-group-flush mb-5">
            {this.props.personas.filter(x => x._id !== this.props.getUsuario()._id).map((p, i) => {
              return (
                <li
                  key={i}
                  className="list-group-item d-flex flex-md-row flex-column justify-content-between align-items-center"
                >
                  <img
                    src={p.imagen}
                    alt="Imagen de Perfil"
                    className="rounded-circle"
                    height="80"
                    width="80"
                  />
                  <span>{p.nombre}</span>
                  <span>{p.nombreUsuario}</span>
                  <span>{p.correo}</span>
                  <span>{p.amigos.length} amigos</span>
                  <button
                    className="but-solid"
                    disabled={this.state.amigos.includes(p.nombreUsuario)}
                    onClick={_ => this.handleFriend(p.nombreUsuario)}
                  >
                    {this.state.amigos.includes(p.nombreUsuario) ? (
                      <React.Fragment>Agregado</React.Fragment>
                    ) : (
                      <React.Fragment>Agregar</React.Fragment>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    personas: Usuarios.find().fetch()
  };
})(ListarUsuarios);
