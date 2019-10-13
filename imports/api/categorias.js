import { Mongo } from "meteor/mongo";

export default Categorias = new Mongo.Collection("categorias");

function insertCategoria(nombre, id_tip, id_objeto) {
  Categorias.insert({ nombre, id_tip, id_objeto, createdAt: new Date() });
}

function insertAll() {
  /**
   * https://www.eco-huella.com/2016/03/huella-ambiental.html
  */
  if (Categorias.find().count() === 0) {
    insertCategoria("Cambio climático", 1, 1);
    insertCategoria("Destrucción de la capa de ozono", 2, 2);
    insertCategoria("Toxicidad humana con efectos cancerígenos", 3, 3);
    insertCategoria("Toxicidad humana sin efectos cancerígenos", 4, 4);
    insertCategoria("Partículas y aspectos respiratorios", 5, 5);
    insertCategoria("Radiación ionizante", 6, 6);
    insertCategoria("Formación de ozono fotoquímico", 7, 7);
    insertCategoria("Acidificación", 8, 8);
    insertCategoria("Eutrofización terrestre", 9, 9);
    insertCategoria("Eutrofización acuática", 10, 10);
    insertCategoria("Ecotoxicidad en medio acuático", 11, 11);
    insertCategoria("Uso del suelo", 12, 12);
    insertCategoria("Consumo de recursos – agua", 13, 13);
    insertCategoria(
      "Consumo de recursos – minerales y combustibles fósiles",
      14,
      14
    );
  }
}

export { insertAll };
