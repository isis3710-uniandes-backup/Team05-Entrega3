import React, { Component } from 'react';

import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <div className="container-fluid">
          <Navbar />
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
