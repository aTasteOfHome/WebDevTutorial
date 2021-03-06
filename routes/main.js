'use strict';

const express = require('express');

const router = express.Router();

router.use(express.static(__dirname + '/public'));

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;