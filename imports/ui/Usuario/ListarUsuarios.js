import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Usuarios from "../../api/usuarios";
import './Usuario.css';
import { toast } from "react-toastify";

class ListarUsuarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      busqueda: ""
    };

    this.handleFriend = this.handleFriend.bind(this);
    this.filtrar = this.filtrar.bind(this);
  }

  filtrar(event) {
    const b = event.target.value;
    this.setState({ 
        busqueda: b
    });
}

  handleFriend(username) {
    Usuarios.update(
      { _id: this.props.getUsuario()._id },
      { $push: { amigos: username } },
      { multi: false },
      (err, res) => {
          if(err) toast.error('Algo ocurrió al intentar agregar un amigo, inténtalo nuevamente');
          toast.success(`Agregaste a ${username} de amigo exitosamente 😊`);
          let usr = {...this.props.getUsuario()};
          usr.amigos.push(username);
          this.props.setUsuario(usr);
        }
      );
  }

  render() {
    return (
      <div>
        <div className="container host">
          <h3 className="font-weight-bold mt-5 mb-2 pt-2">Con Quién Competir</h3>
          <div className="my-4 buscador">
            <input className="form-control" id="buscarAmigos" autoFocus type="text" value={this.state.busqueda} onChange={this.filtrar} placeholder="Busca por nombre de usuario" />
          </div>
          <ul className="list-group list-group-flush mb-5">
            {this.props.filtrar(this.state.busqueda).filter(x => x._id !== this.props.getUsuario()._id).map((p, i) => {
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
                    disabled={this.props.amigos.includes(p._id)}
                    onClick={_ => this.handleFriend(p._id)}
                  >
                    {this.props.amigos.includes(p._id) ? (
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

export default withTracker(({ getUsuario }) => {
  let p = Usuarios.find().fetch();

  return {
    personas: p,
    filtrar: (busqueda) => {
      let todos = Usuarios.find().fetch();
      return todos.filter(x => x._id.includes(busqueda));
    },
    amigos: getUsuario().amigos
  };
})(ListarUsuarios);
