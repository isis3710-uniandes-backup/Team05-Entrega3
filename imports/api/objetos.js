import { Mongo } from "meteor/mongo";

export default Objetos = new Mongo.Collection("objetos");

function insertObjeto(id,nombre, peso, descripcion, unidad, cantidad, _idCategoria, _idReporte){
    Objetos.insert({_id:id,nombre, peso, descripcion, unidad, cantidad, _idCategoria,_idReporte});

}

function insertAll(){

    if(Objetos.find().count() === 0){
        insertObjeto("1","Lavadora", 10, "Uso en horas de la lavadora", "Hora(s)", 1, "1","0");
        insertObjeto("2","Agua", 20, "Uso en litros de agua", "Litros", 1, "1","0");
        insertObjeto("3","Gas", 15.1, "Uso en libras de de gas", "Libras", 1, "1","0");
        insertObjeto("4","Television", 15.1, "Uso en horas de television", "Horas", 1, "1","0");
        insertObjeto("5","Carro", 50, "Uso en horas de carro propio", "Hora(s)", 1, "3","0");
        insertObjeto("6","Bus", 20, "Uso en horas de Bus Publico", "Hora(s)", 1, "3","0");
        insertObjeto("7","Bicicleta", 1, "Uso en horas de la bicicleta", "Hora(s)", 1, "3","0");
        insertObjeto("8","Moto", 15, "Uso en horas de moto", "Hora(s)", 1, "3","0");
        insertObjeto("9","Celular", 12, "Uso en horas de Celular", "Hora(s)", 1, "4","0");
        insertObjeto("10","Computador", 10, "Uso en horas de computador", "Hora(s)", 1, "4","0");
        insertObjeto("11","Bombillos", 4, "numero bombillos", "bombillos", 1, "4","0");

    }
}

export {insertAll};