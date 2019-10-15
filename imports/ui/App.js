import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import NotFound from './Common/NotFound';
import Login from './Common/Login';
import Registrarse from './Common/Registrarse';
import Evaluacion from "./Evaluacion";
import Perfil from './Usuario/Perfil';

class App extends Component {

  constructor() {
    super();
    this.state = {
      actual: undefined
    }

    this.setUsuario = this.setUsuario.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.removeUsuario = this.removeUsuario.bind(this);
  }

  setUsuario(usr) {
    this.setState({ actual: usr });
    // localStorage.setItem('actual', this.state.actual);
    console.log("Actualizado el usuario !");
  }

  getUsuario() {
    return this.state.actual;
  }

  removeUsuario() {
    this.setState({ actual: undefined });
    // localStorage.clear();
  }

  requireAuth(nextState, replace) {
    if (!this.getUsuario()) {
      replace({
        pathname: '/login'
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Navbar getUsuario={this.getUsuario} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={(props) => <Login {...props} setUsuario={this.setUsuario} getUsuario={this.getUsuario} /> } />
            <Route exact path="/registrarse" render={(props) => <Registrarse {...props} setUsuario={this.setUsuario} getUsuario={this.getUsuario} /> } />
            <Route exact path="/perfil" render={(props) => <Perfil {...props} getUsuario={this.getUsuario} removeUsuario={this.removeUsuario} /> } />
            <Route exact path="/evaluacion" render={(props) => <Evaluacion {...props} /*id_Usuario = {this.getUsuario}*//>}  />
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
