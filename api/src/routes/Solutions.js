const { Router } = require("express");
const axios = require("axios");
let router = Router();

router.get('/1', async (req, res, next) => {
    res.send({result: Math.random() * 100})
})

module.exports = router;