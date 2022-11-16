const express = require("express");
const router = express.Router();
const db = require("../baseDatos");

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

//leer usuario
router.get("/get/:idUsuario", function (req, res) {
    let idUsuario = req.params.idUsuario;
    let usuario = db.getUser(idUsuario);
    res.json(usuario);
    res.status(200);
});

//crear usuario
router.post("/create", function (req, res) {
    let newUser = req.body;
    //validaciones
    let id = db.createUser(newUser);
    res.send(id);
});

//eliminar usuario
router.delete("/delete/:idUsuario", function (req, res) {
    let idUsuario = req.params.idUsuario;
    db.deleteUser(idUsuario);
    res.send("El usuario se elimino correctamente");
    res.status(200);
});

module.exports = router;