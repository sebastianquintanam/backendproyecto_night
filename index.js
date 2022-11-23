console.log("Cargando configuracion...");
//Importar las dependencias
const express = require("express");
var bodyParser = require("body-parser");
let cors = require("cors");

//Cargar configuracion app WEB
const appConfig = require("./config");

console.log("Inicializar la Aplicacion WEB...");
//Inicializar una APLICACION WEB
require("./db/dbInitializer");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

console.log("Configurando Routers...");
const userDummyRouter = require("./routes/routerDummyUser");
const userRouter = require("./routes/routerUsers");

//Configurar Routers en la APP

app.use("/api/usuariosDummy", userDummyRouter);
app.use("/api/usuarios", userRouter);

app.get(
    "/",

    function (req, res) {
        res.send("Home Page!");
    }
);

app.get("/imagen", async function (req, res) {
    res.sendFile(
        "E:/CICLO4/1,2,6,59/backendproyecto_nigth/images/imagentest.png"
    );
});

console.log("Iniciando Servidor");

let server = app.listen(
    appConfig.PORT,

    function () {
        console.log(
            `La aplicacion WEB esta escuchando en el PUERTO: ` + appConfig.PORT
        );
    }
);

//AXIOS -> permite hacer peticiones HTTP