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
    res
    .status(204)
    .send('Hello world! I\'m healthy!')
    .end();
});

app.get('/', (req, res) => {
    res
    .status(200)
    .send('Hello world! I\'m the root path!')
    .end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;