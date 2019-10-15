import { Mongo } from "meteor/mongo";

export default Objetos = new Mongo.Collection("objetos");

function insertObjeto(id,nombre, peso, descripcion, unidad, cantidad, _idCategoria, _idReporte){
    Objetos.insert({_id:id,nombre, peso, descripcion, unidad, cantidad, _idCategoria,_idReporte});

}

function insertAll(){

    if(Objetos.find().count() === 0){
        insertObjeto("1","Lavadora", 10, "Uso en horas de la lavadora en la casa", "Hora(s)", 1, "1","0");
        insertObjeto("2","Agua", 20, "Uso en litros de agua en la casa", "Litros", 1, "1","0");
        insertObjeto("3","Gas", 15.1, "Uso en libras de de gas en la casa", "Libras", 1, "1","0");
        insertObjeto("4","Television", 15.1, "Uso en horas de television", "Horas", 1, "1","0");
        insertObjeto("5","Carro", 50, "Uso en horas de carro propio", "Hora(s)", 1, "3","0");
        insertObjeto("6","Bus", 20, "Uso en horas de Transporte Publico", "Hora(s)", 1, "3","0");
        insertObjeto("7","Bicicleta", 1, "Uso en horas de la bicicleta", "Hora(s)", 1, "3","0");
        insertObjeto("8","Moto", 15, "Uso en horas de motocicletas", "Hora(s)", 1, "3","0");
        insertObjeto("9","Celular", 12, "Uso en horas de Celular", "Hora(s)", 1, "4","0");
        insertObjeto("10","Computador", 10, "Uso en horas de computador", "Hora(s)", 1, "4","0");
        insertObjeto("11","Bombillos", 4, "Número de bombillos", "Bombillo(s)", 1, "4","0");
        insertObjeto("12","Equipo de Sonido", 4, "Horas de uso Equipo de sonido", "Hora(s)", 1, "4","0");
        insertObjeto("13","Comida Afuera", 13, "Número de Veces que se comió por fuera de casa", "Veces", 1, "2","0");
        insertObjeto("14","Preparado en Casa", 3, "Número de Veces que se ha preparado en casa", "Veces", 1, "2","0");
        insertObjeto("15","Carne Res", 7, "Número de veces que se come carne de rés", "Veces", 1, "2","0");
        insertObjeto("16","Huevos", 5, "Número de huevos consumidos", "Veces", 1, "2","0");
        insertObjeto("17","Leche", 5, "Cantidad de leche consumida", "Litros", 1, "2","0");
        insertObjeto("18","Pollo", 6, "Número de veces que se come carne de pollo", "Veces", 1, "2","0");

    }
}

export {insertAll};