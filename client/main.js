import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '/imports/ui/App';

Meteor.startup(() => {
  render(
  <Router>
    <App /> 
  </Router>,
  document.getElementById('react-target'));

  // NO SÉ SI ESTO LO NECESITAMOS PERO LO COPIÉ POR SI ACASO
  // if ( module.hot ) {
  //   module.hot.accept();
  // }
});
