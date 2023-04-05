const { Router } = require('express');
const { Type } = require('../db.js');
const { default: axios } = require('axios');
const solutions = require('./Solutions.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',async (req,res,next) => {
    let result = {server: 'working'};
    res.send(result);
})

router.use('/solution', solutions)

module.exports = router;
