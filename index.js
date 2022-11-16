console.log("Cargando configuracion...");
//Importar las dependencias
const express = require("express");
var bodyParser = require("body-parser");

//Cargar configuracion app WEB
const PORT = process.env.PORT || 3500;

console.log("Inicializar la Aplicacion WEB...");
//Inicializar una APLICACION WEB
const app = express();

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

console.log("Configurando Routers...");
const userRouter = require("./routes/routerUser");

//Configurar Routers en la APP
app.use(bodyParser.json());

app.use("/api/usuarios", userRouter);

app.get(
    "/",

    function (req, res) {
        res.send("Home Page!");
    }
);

console.log("Iniciando Servidor");

let server = app.listen(
    PORT,

    function () {
        console.log(`La aplicacion WEB esta escuchando en el PUERTO: ` + PORT);
    }
);

//AXIOS -> permite hacer peticiones HTTP