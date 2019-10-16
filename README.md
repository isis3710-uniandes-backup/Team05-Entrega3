# LeafStyle - Proyecto Programación Web


[Meteor](https://www.meteor.com/) - [NPM](https://www.npmjs.com/get-npm) 

<br/>
Una vez desplegada la aplicación, se puede registrar o iniciar sesión para luego calcular la huella de carbono que es generada por uno mismo, y compararlo con sus amigos. De esta forma, se puede comparar con los demás usuarios de la aplicación qué tan conscientes del medio ambiente somos y promover esto. Se tienen también tips para mejorar esta huella de carbono y disminuirla (son consejos que también redireccionan a sitios con mayor información al respecto). La idea es promover el ahorro y la conservación de recursos naturales entre los usuarios de la aplicación de tal forma que compitan por tener la menor huella.

Además de esto, la aplicación cuenta con página de 404 si se intenta entrar a una ruta que no existe y las páginas privadas, las cuales son accesibles solo cuando el usuario está autenticado, están protegidas al acceso directo a las mismas.

> [Video](https://www.youtube.com/watch?v=G-fUeK2h1WA&feature=youtu.be)


> [Sitio Web](http://3.86.254.208:3000)

> [Presentación](https://docs.google.com/presentation/d/1JXTZde0KdELhc1oxuWOIfcW0IkncmlLJcYF1I9s5Xoc/edit?usp=sharing)


### Deployment

```ssh
$ git clone repo
$ cd repo
$ meteor npm i

$ meteor
``` 

Se utiliza la base de datos MongoDB local de Meteor. 


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
