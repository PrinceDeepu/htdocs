const express = require('express');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const path = require('path');
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use('/files', express.static(path.join('public/files')), serveIndex(path.join('public/files'), {
    'icons': true
}))
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});
app.listen(3100);