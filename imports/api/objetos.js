import { Mongo } from "meteor/mongo";

export default Objetos = new Mongo.Collection("objetos");

function insertObjeto(id,nombre, peso, descripcion, unidad, cantidad, _idCategoria, _idReporte){
    Objetos.insert({_id:id,nombre, peso, descripcion, unidad, cantidad, _idCategoria,_idReporte});

}

function insertAll(){

    if(Objetos.find().count() === 0){
        insertObjeto("1","Lavadora", 10, "Uso en horas de la lavadora", "Hora(s)", 5, "1","0");
        insertObjeto("2","Agua", 20, "Uso en litros de agua", "Litros", 25, "1","0");
        insertObjeto("3","Gas", 15.1, "Uso en libras de de gas", "Libras", 12, "1","0");
    }
}

export {insertAll};