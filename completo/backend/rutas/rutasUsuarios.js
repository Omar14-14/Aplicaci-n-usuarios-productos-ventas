var ruta = require("express").Router();
var {mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorId, editarUsuario} = require("../bd/usuariosBD"); 

ruta.get("/", async (req,res)=>{
    //res.send("Hola, estas en raíz");
    const usuarios = await mostrarUsuarios();
    //console.log(usuarios);
    res.json(usuarios);
});

ruta.get("/buscarporId/:id", async(req,res)=>{
    var usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

ruta.delete("/borrarUsuario/:id", async(req,res)=>{
    var borrado = await borrarUsuario(req.params.id);
    res.json(borrado);
});

ruta.post("/nuevoUsuario", async(req,res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

ruta.delete("/editarUsuario/:id", async (req, res) => {
    var resultado = await editarUsuario(req.params.id, req.body);
    res.json(resultado);
});

module.exports = ruta;