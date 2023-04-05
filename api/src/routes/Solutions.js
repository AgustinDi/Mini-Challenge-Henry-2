const { Router } = require("express");
const axios = require("axios");
let router = Router();

router.get('/1', async (req, res, next) => {
    res.send({section: 'solutions'})
})

module.exports = router;