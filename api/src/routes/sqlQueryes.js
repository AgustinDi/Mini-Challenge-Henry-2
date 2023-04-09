const { Router } = require("express");
const { Departamento, Empleado, Localidad, Puesto } = require('../db.js');
let router = Router();

router.get('/', async (req, res, next) => {
    res.send({server: "Las respuestas del 1 al 13 se encuentran agregando un /"})
})

router.get('/1', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll();
        res.send(empleados.map(x=>x.NOMBRES).sort())
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/2', async (req, res, next) => {
    try {
        let empleados = await Departamento.findAll({include: Localidad});
        res.send(empleados)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

module.exports = router;