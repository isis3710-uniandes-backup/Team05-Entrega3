import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

function PrivateRoute ({ ...rest }) {
  const getUsuario = rest.getUsuario;
  if(getUsuario()) {
    return (
      <Route {...rest} />
    );
  }
  else {
    toast.warning('¡Debes ingresar para acceder a esa ruta!');
    return (
      <Redirect to='/login' />
    );
  }
}

function SpecialRoute ({ component: Component, ...rest }) {
  const getUsuario = rest.getUsuario;
  if(getUsuario()) {
    return (
      <Redirect to='/' />
    );
  }
  else {
    return (
      <Route {...rest} />
    );
  }
}

export { PrivateRoute, SpecialRoute };