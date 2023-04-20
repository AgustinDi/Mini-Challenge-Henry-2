const { Router } = require('express');
const solutions = require('./Solutions.js')

const router = Router();

router.get('/',async (req,res,next) => {
    let result = {server: 'working'};
    res.send(result);
})

router.use('/solution', solutions)

router.get('/',async (req,res,next) => {
    res.send({server: 'error'})
})

module.exports = router;
