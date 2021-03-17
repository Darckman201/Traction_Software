'use strict'

var mongoose=require('mongoose'); //cargar el modulo de mongoose
var Schema=mongoose.Schema; //utilizar objetos de tipo Schema para la BD NoSQL

//Crear el onjeto Schema

var UsuarioEsquema=Schema({
    nombre:String,
    correo:String,
    contrasena:String,
    date:{type:Date,default:Date.now},
});

//Mi modelo se llama articulo y el esquema que voy a utilizar se llama ArticuloEsquema
module.exports=mongoose.model('Usuario',UsuarioEsquema);



