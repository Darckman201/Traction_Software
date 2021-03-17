'use strict'

var express=require('express');

//Utilizar el archivo de controles para establecer las rutas a los metodos 
var UsuariosControlador=require('../controles/usuarios');

//CRear el objeto para establecer rutas
var rutas=express.Router();



//Establecer las rutas 
// rutas.get('/prueba_get',UsuariosControlador.prueba_get);
// rutas.post('/prueba_post',UsuariosControlador.prueba_post);

//crear las Rutas para Gestionar la base de datos de Mongo llamada API_REST
rutas.post('/registrar',UsuariosControlador.insertar); //insertar un articulo
// rutas.get('/buscarArticulos/:last?',UsuariosControlador.buscar); //buscar los ultimos 5 articulos ingresados
// rutas.get('/buscarArticulo/:id?',UsuariosControlador.busqueda); //buscar un articulo en especifico
// rutas.put('/actualizarArticulo/:id?',UsuariosControlador.actualizar);//Busca y actializar un articulo especifico
// rutas.delete('/eliminarArticulo/:id?',UsuariosControlador.eliminar); //Elimina un articulo especifico
// rutas.put('/cargarImagen/:id?',md_upload,UsuariosControlador.cargar_imagen);//Cargar el nombre del archivo en la etiqueta image
// rutas.get('/sacarImagen/:image?',UsuariosControlador.sacar_imagen); //sacar la imagen de acuerdo a la ruta del archivo
rutas.get('/login',UsuariosControlador.consulta); //consultar por contenido por aproximacion 

//Exportar el objeto rutas para utilizar lo fuera de aqui
module.exports=rutas;


