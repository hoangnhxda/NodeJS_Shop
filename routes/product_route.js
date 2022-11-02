const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use('/add-product', (req, res, next) => {
    res.send("<h1>Add products</h1>");
});

module.exports = router;