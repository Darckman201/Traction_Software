'use strict'

//cargar el modulo de mongoose para conectar con la BD de mongo
var mongoose=require('mongoose');
var app = require('./app'); //cargar el archivo app.js dentro del index.js
var port=3000;


//colocar configuraciones adicionales para que el mogoose no falle
mongoose.Promise=global.Promise;

//desactivar los metodos viejos del mongoose
mongoose.set('useFindAndModify',false);

//Conectar BD de mongo con Node JS
//mongoose.connect('mongodb://localhost:27017/api_restb?authSource=admin',{user: 'PaolaR', pass: '12345'},{useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connect('mongodb+srv://TractionSoft:TractSoft_int@tractionsoftware.ldg1r.mongodb.net/tractionsoftware?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>{
        //Conectar Node JS con Mongo DB
        console.log('Conexion exitosa con Mongo DB');

        //Crear el servidor Web para escuche peticiones HTTP
        app.listen(port,()=>{
          console.log('Servidor corriendo y listo en: http://localhost:'+port);
        });
    });


