const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/Jacquelyn-Portfolio'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/Jacquelyn-Portfolio/index.html'));});
app.listen(process.env.PORT || 8080);
