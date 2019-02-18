const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');

const server = http.createServer(app);
// conf servidor
app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

// app.get('/', function(req, res) {
//     res.end('mi chat iniciado');
// });
// init servidor
server.listen(app.get('port'), function() {
        console.log('el servidor iniciado');
    })
    // logica de sockets

require('./sockets')(server);