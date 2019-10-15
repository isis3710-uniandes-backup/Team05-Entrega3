import { Mongo } from "meteor/mongo";

export default Categorias = new Mongo.Collection("categorias");

function insertCategoria(id,nombre, id_tip) {
  Categorias.insert({ id, nombre, id_tip, _id: id});
}

function insertAll() {
  /**
   * https://www.eco-huella.com/2016/03/huella-ambiental.html
  */
 Categorias.remove({})
  if (Categorias.find().count() === 0) {
    insertCategoria("1","Vivienda", "1");
    insertCategoria("2","Alimentación", "2");
    insertCategoria("3","Transporte", "3");
    insertCategoria("4","Electricidad", "4");
  }
}

export { insertAll };
