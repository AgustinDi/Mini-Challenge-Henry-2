const { Router } = require("express");
const axios = require("axios");
const Alumno = require("../Class/index.js")
let router = Router();

router.get('/1', async (req, res, next) => {
    let result = [];
    let counter = 0;
    while (counter !== 100) {
        if(counter % 2 !== 0) result.push(counter);
        counter++;
    }
    res.send({result})
})

router.get('/3', async (req, res, next) => {
    const people = new Alumno("agus", 19);
    res.send({
        nombre: people.getNombre(),
        edad: people.getEdad(),
        ["es un adulto?"]: people.isAdult()
    })
})

module.exports = router;