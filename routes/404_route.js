const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("I'm in the middleware of page not found");
    next();
});


router.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});

module.exports = router;