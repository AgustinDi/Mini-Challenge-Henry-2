const { Router } = require("express");
const Alumno = require("../Class/index.js");
const sqlQueryes = require("./sqlQueryes.js");
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

router.get('/4', async (req, res, next) => {
    const x = ["n", "bro", "c", "|"]; 
    const y = ["d", "n", "l","bro", "g"];
    res.send(y.filter(z=>!x.includes(z)))
})

router.use('/5', sqlQueryes)

module.exports = router;