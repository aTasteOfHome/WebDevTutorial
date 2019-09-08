'use strict';

const express = require('express');
const mainRouter = require('./routes/main');

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use('/main', mainRouter);

app.get('/health', (req, res) => {
    res.send('Hello world! I\'m healthy!');
});

module.exports = app;