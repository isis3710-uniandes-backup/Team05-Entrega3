import { Mongo } from "meteor/mongo";

export default Usuarios = new Mongo.Collection("usuarios");

function insertUsuario(nombre, nombreUsuario, imagen, contrasenia, correo, ahorroActual, amigos) {
  Usuarios.insert({ nombre, nombreUsuario, imagen, contrasenia, correo, ahorroActual, amigos, _id: nombreUsuario});
}

function insertAll() {
  
  if (Usuarios.find().count() === 0) {
    insertUsuario("Santiago Salazar Alvarez", "santi99", "https://santiagosalazar.me/assets/img/op1.jpg", "123456", "s.salazara@uniandes.edu.co", 10.33, ["juanca88","erne77","andy66","sebas55"]);
    insertUsuario("Juan Camilo Pulido", "juanca88", "https://randomuser.me/api/portraits/men/95.jpg", "123456", "juanpulido@csma.edu.co", 8.4, ["santi99","erne77","andy66","sebas55"]);
    insertUsuario("Ernesto Viana", "erne77", "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg", "123456", "lvianacastillo@gmail.com", 7.2, ["santi99","juanca88","andy66","sebas55"]);
    insertUsuario("Andrés Losada", "andy66", "https://pbs.twimg.com/profile_images/1088513457656381446/O03LEDCy.jpg", "123456", "nedrocoli@gmail.com", 12.5, ["santi99","juanca88","erne77","sebas55"]);
    insertUsuario("Sebastián García", "sebas55", "https://pbs.twimg.com/profile_images/946958436830285824/M21pui0V.jpg", "123456", "sebgarcia.26@gmail.com", 3.55, ["santi99","juanca88","erne77","andy66"]);
  }

}

export { insertAll };