import { Mongo } from "meteor/mongo"

export default Tips = new Mongo.Collection("tips");

function insertTip(id,descripcion, url) {
    Tips.insert({_id:id,descripcion, url});
}

function insertAll() {
    if (Tips.find().count() === 0) {
        insertTip("3","Disminuye el uso que le das a tus vehículos, camina o haz uso de la bicicleta cuando sea posible, también intenta hacer uso del transporte público siempre que sea posible", "https://www.nationalgeographic.com.es/ciencia/3-maneras-de-reducir-tu-huella-de-carbono_9940/2");
        insertTip("1","Al estar escogiendo electrodomésticos, busca que tengan la mejor eficiencia posible. Cambia las bombillas incandescentes por bombillas fluosescentes compactas o LEDs.", "https://www.ngenespanol.com/naturaleza/10-formas-de-reducir-tu-huella-de-carbono/");
        insertTip("2","Reduce el consumo de carne, pues gran parte de las emisiones de dan gracias a la forma en como se cría al ganado. Consume productos locales, pues muchas emisiones se dan gracias al transporte de los productos de las importaciones.", "https://www.ecologiaverde.com/como-reducir-mi-huella-de-carbono-1355.html#anchor_1");
        insertTip("4","De ser posible instala paneles solares en tu vivienda. Reutiliza y recicla lo que más puedas, muchas emisiones se dan gracias al proceso provisión de bienes. Reduce la cantidad de energía empleada en el uso del agua, ya sea para calentarla o para bombearla.","https://fundaciontelevisa.org/2015/05/causas/medio-ambiente-causas/conoce-reduce-huella-hidrica/")
    }
}
export{insertAll}