import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Tips from "/imports/api/tips";
import './Objeto.css';

class ListarTips extends Component {
  constructor(props) {
    super(props);

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
          <h3 className="font-weight-bold my-5 pt-4">¿Cómo mejorar tu huella?</h3>
          <ul className="list-group list-group-flush mb-5">
            {this.props.tips.map((p, i) => {
              return (
                <li
                  key={i}
                  className="list-group-item list-group-item-action d-flex flex-md-row flex-column justify-content-between align-items-center"
                >
                  <a href={p.url}>
                    <h4 className="brown font-weight-bold">{ i }</h4>
                    <p>{p.descripcion}</p>
                  </a>
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
    tips: Tips.find().fetch()
  };
})(ListarTips);
