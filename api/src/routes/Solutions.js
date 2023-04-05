const { Router } = require("express");
const axios = require("axios");
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

})

module.exports = router;