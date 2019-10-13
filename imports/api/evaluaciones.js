import { Mongo } from "meteor/mongo";
export default Evaluaciones = new Mongo.Collection("evaluaciones");

function insertEvaluacion(fecha, planetas, _idUsuario, _idEvaluacionAnterior){
    Evaluaciones.insert({fecha, planetas, _idUsuario, _idEvaluacionAnterior});
}

function insertAll(){

}

export {insertAll};