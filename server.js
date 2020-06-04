const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.send('Hello CircleCI');
})

app.listen(3000);