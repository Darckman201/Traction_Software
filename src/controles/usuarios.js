"use strict";

//crear un objeto usuario a partir del archivo modelos/usuario.js
var Usuario = require("../modelos/usuarios");

//Crear un objeto para validar los atributos de la collecion
var validacion = require("validator");

var controlador = {
  insertar: (req, res) => {
    //recoger los paremetros con el metodo post
    var params = req.body;

    //crear un objeto "usuarios" apartir del Modelo de "usuario"
    var usuario = new Usuario();

    //asiganar valores
    usuario.nombre = params.nombre;
    usuario.correo = params.correo;
    usuario.contrasena = params.contrasena;
    

    //validar los datos recibidos y asigandos por medio del objeto validacion
    try {
      var validar_nombre = !validacion.isEmpty(params.nombre);
      var validar_correo = !validacion.isEmpty(params.correo);
      var validar_contrasena = !validacion.isEmpty(params.contrasena);
    } catch (err) {
      return res.status(404).send({
        //Registro NO insertado Error
        status: "Error",
        mensaje: "Faltan datos por enviar ... verifique por favor",
      });
    }

    //verificar que la validacion sea correcta
    if (validar_nombre && validar_correo && validar_contrasena) {
      //si esta correcto la validacion
      //Guardar los usuarios en la BD de mongo
      usuario.save((err, usuarioInsertado) => {
        if (err || !usuarioInsertado) {
          return res.status(404).send({
            //Registro NO insertado Error
            status: "Error",
            mensaje: "El usuario no se ha guardado",
          });
        }

        return res.status(200).send({
          //Registro insertado con exito
          status: "Completado",
          usuarioInsertado,
        });
      });
    } else {
      return res.status(404).send({
        //Registro NO insertado Error
        status: "Error",
        mensaje: "Los datos no son validos verifique por favor",
      });
    }
  },


  consulta:(req,res)=>{
    //obtener el contenido a buscar dentro del metodo
    // var cadena=req.params.cadena;
    var cadena=req.body;

    //Find or
    //si el valor de la cadena esta incluido (i) dentro del title entonces sacar los 
    //articulos 0 si el valor de la cadena esta incluido (i) dentro del content sacar los
    //articulos
    Usuario.find({"$and":[
        {"correo":cadena.correo},
        {"contrasena":cadena.contrasena}
    ]})
    .exec((err,usuario)=>{
       if (err)
       {
          return res.status(404).send({
              //Error
              status:'No fue posible ejecutar la consulta'
          })
       }

       if (!usuario)
       {
          return res.status(404).send({
              //Error
              status:'No hay usuarios que coincidan con el parametro de consulta'
          })
       }

       return res.status(200).send({
           //Registros consultados con exito
           status:'Registros consultados con exito',
           usuario,
           mensaje:"Acceso Consedido!!!"
       })

    });
 

  }
};

module.exports = controlador;
