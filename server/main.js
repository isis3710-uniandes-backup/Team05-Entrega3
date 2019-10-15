import { Meteor } from 'meteor/meteor';

import { insertAll as insertCategorias } from '../imports/api/categorias'
import { insertAll as insertObjetos } from '../imports/api/objetos';
import { insertAll as insertTips } from '../imports/api/tips';
import { insertAll as insertUsuarios } from '../imports/api/usuarios';
import { Evaluaciones } from '../imports/api/evaluaciones';

Meteor.startup(() => {

  // Si no hay datos, los añade
  insertCategorias();
  insertObjetos();
  insertTips();
  insertUsuarios();
});
