const { Router } = require("express");
const axios = require("axios");
let router = Router();

router.get('/1', async (req, res, next) => {
    const random = Math.random() * 100;
    res.send({result: random == 0 ? 100 : random})
})

module.exports = router;