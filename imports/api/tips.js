import { Mongo } from "meteor/mongo"

export default Tips = new Mongo.Collection("tips");

function insertTip(id,descripcion, url) {
    Tips.insert({_id:id,descripcion, url});
}

function insertAll() {
    if (Tips.find().count() === 0) {
        insertTip("3","Disminuye el uso que le das a tus vehículos, camina o haz uso de la bicicleta cuando sea posible, también intenta hacer uso del transporte público siempre que sea posible", "url");
        insertTip("1","Al estar escogiendo electrodomésticos, busca que tengan la mejor eficiencia posible. Cambia las bombillas incandescentes por bombillas fluosescentes compactas o LEDs.", "url");
        insertTip("2","Reduce el consumo de carne, pues gran parte de las emisiones de dan gracias a la forma en como se cría al ganado. Consume productos locales, pues muchas emisiones se dan gracias al transporte de los productos de las importaciones.", "url");
        insertTip("4","De ser posible instala paneles solares en tu vivienda. Reutiliza y recicla lo que más puedas, muchas emisiones se dan gracias al proceso provisión de bienes. Reduce la cantidad de energía empleada en el uso del agua, ya sea para calentarla o para bombearla.","url")
    }
}
export{insertAll}