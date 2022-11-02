const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.status(404).send("<h1>Home page</h1>");
});

module.exports = router;