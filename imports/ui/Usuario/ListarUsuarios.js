import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Usuarios from "../../api/usuarios";

class ListarUsuarios extends Component {

    constructor(props) {
        super(props)

        this.state = {
            amigos: this.props.getUsuario() ? this.props.getUsuario().amigos : [],
        }

        this.handleFriend = this.handleFriend.bind(this);
    }

    handleFriend(username) {
        this.setState(prev => {
            return {amigos: [...prev.amigos, username]}
        })
        Usuarios.update({_id: this.props.getUsuario().nombreUsuario}, { $push :  { amigos: username } });
        this.forceUpdate()
    }

  render() {
    return (
      <div>
        <div className="container host">
          <h5 className="card-header">A quién seguir</h5>
          <br />
          <br />
          <ul className="list-group">
            {this.props.personas.map((p, i) => {
              return (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  <img src={p.imagen} alt="Imagen de Perfil" className="img-thumbnail" style={{height: '100px'}} />
                  <p>{p.nombre}</p>
                  <p>{p.nombreUsuario}</p>
                  <p>{p.correo}</p>
                  <p>{p.amigos.length} amigos</p>
                  <button
                    className="but-solid"
                    disabled={this.state.amigos.includes(p.nombreUsuario)}
                    onClick={_ => this.handleFriend(p.nombreUsuario)}
                  >
                    Agregar Amigo
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
