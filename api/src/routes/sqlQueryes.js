const { Router } = require("express");
const { Departamento, Empleado, Localidad, Puesto } = require('../db.js');
let router = Router();

router.get('/', async (req, res, next) => {
    res.send({server: "Las respuestas del 1 al 13 se encuentran agregando un /"})
})

router.get('/1', async (req, res, next) => {
    let result = await Empleado.findAll();
    res.send(result)
})

module.exports = router;