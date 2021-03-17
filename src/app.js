'use stric'

//cargar los modulos para crear el servidor Web
var express=require('express'); //funcionar con peticiones HTTP
var bodyParser=require('body-parser'); //convertir lo que se reciba a JSON

//ejecutar el express (HTTP)
var app=express();

//cargar el body-parser para que este listo para utilizarlo
app.use(bodyParser.urlencoded({extended:false}));

//Utilizarlo para convertir cualquier cosa a JSON
app.use(bodyParser.json());

//Añadir o agregar el archivo de rutas dentro de app
var usuarios_rutas=require('./rutas/usuarios');

//Añadir rutas o metodos de prueba

//agrgar la ruta real para acceder a los metodos 
app.use(usuarios_rutas);


//exportar el modulo app
module.exports=app;




