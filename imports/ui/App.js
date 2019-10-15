import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { PrivateRoute } from './Common/SpecialRoutes';

import 'react-toastify/dist/ReactToastify.min.css';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import NotFound from './Common/NotFound';
import Login from './Common/Login';
import Registrarse from './Common/Registrarse';
import Evaluacion from "./Evaluacion";
import Perfil from './Usuario/Perfil';
import ListarUsuarios from './Usuario/ListarUsuarios';
import ListarTips from './ListarTips';

class App extends Component {

  constructor() {
    super();
    this.state = {
      actual: JSON.parse(localStorage.getItem('actual'))
    }

    this.setUsuario = this.setUsuario.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.removeUsuario = this.removeUsuario.bind(this);

  }

  setUsuario(usr) {
    localStorage.setItem('actual', JSON.stringify(usr));
    this.setState({ actual: usr });
    console.log("Actualizado el usuario !");
  }

  getUsuario() {
    return this.state.actual;
  }

  removeUsuario() {
    this.setState({ actual: undefined });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Navbar getUsuario={this.getUsuario} removeUsuario={this.removeUsuario} />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} getUsuario={this.getUsuario} />} />
            <Route exact path="/login" render={(props) => <Login {...props} setUsuario={this.setUsuario} getUsuario={this.getUsuario} />} />
            <Route exact path="/registrarse" render={(props) => <Registrarse {...props} setUsuario={this.setUsuario} getUsuario={this.getUsuario} />} />
            <Route exact path="/tips" render={(props) => <ListarTips {...props} getUsuario={this.getUsuario} />} />
            <PrivateRoute exact path="/perfil" render={(props) => <Perfil {...props} getUsuario={this.getUsuario} removeUsuario={this.removeUsuario} />} getUsuario={this.getUsuario} />
            <PrivateRoute exact path="/evaluacion" render={(props) => <Evaluacion {...props} id_Usuario = {this.getUsuario()} />} getUsuario={this.getUsuario} />
            <PrivateRoute exact path="/personas" render={(props) => <ListarUsuarios {...props} getUsuario={this.getUsuario} />} getUsuario={this.getUsuario} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <ToastContainer autoClose={5000} position={toast.POSITION.BOTTOM_RIGHT} bodyClassName="customBody" />
        <Footer />
      </div>
    );
  }
}

export default App;
