import { Mongo } from "meteor/mongo";

export default Objetos = new Mongo.Collection("objetos");

function insertObjeto(id,nombre, peso, descripcion, unidad, cantidad, _idCategoria){
    Objetos.insert({_id:id,nombre, peso, descripcion, unidad, cantidad, _idCategoria});

}

function insertAll(){

    if(Objetos.find().count() === 0){
        insertObjeto("507f191e810c19729de860ea","Lavadora", 10, "Uso en horas de la lavadora", "Hora(s)", 5, "507f191e810c19729de860ea");
        insertObjeto("507f191e810c19729de860eb","Agua", 20, "Uso en litros de agua", "Litros", 25, "507f191e810c19729de860ea");
        insertObjeto("507f191e810c19729de860ec","Gas", 15.1, "Uso en libras de de gas", "Libras", 12, "507f191e810c19729de860ea");
    }
}

export {insertAll};