import { Mongo } from "meteor/mongo";
export default Evaluaciones = new Mongo.Collection("evaluaciones");

function insert(fecha, planetas, _idUsuario){
    Evaluaciones.insert({fecha, planetas, _idUsuario});
}

function iniciarEvaluacion(){
    let categorias = Categorias.find({});
    print(categorias);
}

function insertAll(){

}

export {insertAll};