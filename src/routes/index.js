const { Router } = require('express');
const { Type } = require('../db.js');
const { default: axios } = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',async (req,res,next) => {
    let result = {server: 'working'};
    res.send(result);
})

module.exports = router;
