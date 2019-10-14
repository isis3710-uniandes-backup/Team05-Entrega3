import { Mongo } from "meteor/mongo";

export default Categorias = new Mongo.Collection("categorias");

function insertCategoria(nombre, id_tip, id_objeto) {
  Categorias.insert({ nombre, id_tip, createdAt: new Date() });
}

function insertAll() {
  /**
   * https://www.eco-huella.com/2016/03/huella-ambiental.html
  */
  if (Categorias.find().count() === 0) {
    insertCategoria("Vivienda", 1);
    insertCategoria("Alimentación", 2);
    insertCategoria("Transporte", 3);
    insertCategoria("Electricidad", 4);
  }
}

export { insertAll };
