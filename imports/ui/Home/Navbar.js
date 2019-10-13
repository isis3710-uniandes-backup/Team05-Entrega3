import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="fixed-top navbar navbar-expand-md bg-white shadow navbar-light">
                <a className="navbar-brand d-flex align-items-center ml-3" href="/">
                    <img src="img/leaf.svg" className="d-inline-block mr-2" width="40" height="40" />
                    <span className="prefix">Leaf</span>Style
                </a>
            </nav>
        );
    }
}
 
export default Navbar;