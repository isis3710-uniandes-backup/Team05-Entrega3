# LeafStyle - Proyecto Programación Web


[Meteor](https://www.meteor.com/) - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - [NPM](https://www.npmjs.com/get-npm) 

<br/>
Una vez desplegada la aplicación, se puede registrar o iniciar sesión para luego calcular la huella ecológica que es generada por uno mismo, y compararlo con sus amigos. De esta forma, se puede comparar con los demás usuarios de la aplicación qué tan conscientes del medio ambiente somos.


> [Video](https://youtu.be/wBJjLQFR-g8)


> [Sitio Web](https://leafstyle.herokuapp.com)



### Deployment

```ssh
$ git clone repo
$ cd repo
$ meteor npm i

$ meteor
``` 

Se utiliza una base de datos MongoDB local. 


<hr/>


### File directory

```ssh
.
├── package.json 
├── .gitignore    
│
├── meteor
├── public
│   ├── test.js
│   └── package.json
│
├── imports
│   ├── api
│   |   └── ...
│   └── ui
│   |   └── ...
│
├── server
│   ├── main.js     # -> DB entry point
|
└── client
    ├── main.css
    ├── main.html
    └── main.js
    
``` 
