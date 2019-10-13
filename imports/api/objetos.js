import { Mongo } from "meteor/mongo";

export default Objetos = new Mongo.Collection("objetos");

function insertObjeto(nombre, peso, descripcion, unidad, cantidad, _idCategoria){
    Objetos.insert({nombre, peso, descripcion, unidad, cantidad, _idCategoria});

}

function insertAll(){

    if(Objetos.find().count() === 0){
        insertObjeto("Lavadora", 15.1, "Uso en horas de la lavadora", "Hora(s)", 2, "507f191e810c19729de860ea");
    }
}

export {insertAll};