import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import NotFound from './Common/NotFound';
import Login from './Common/Login';
import Registrarse from './Common/Registrarse';

class App extends Component {

  render() { 
    return (
      <div>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrarse" component={Registrarse} />
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
