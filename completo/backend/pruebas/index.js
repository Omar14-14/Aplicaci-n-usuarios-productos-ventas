const express = require ("express");
require("dotenv").config();
const app = express ();

var saludo=(req,res,next)=>{
    console.log("Hola");
    next();
};

app.use((req,res,next)=>{
    console.log("Middleweare para todas las rutas");
    next();
})

app.get("/",saludo,(req,res)=>{
    res.send("Estas en raíz");  
});

app.get("/home",saludo,(req,res)=>{
    res.send("Estas en home");  
});

app.get("/trabajo",(req,res)=>{
    res.send("Estas en trabajo");  
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});