var http = require('http');

var create = function (port) {
    var server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"/><title>Welcome</title></head><body><p>Greetings</p></body> </html>');
    })
    return server.listen(port);
}

module.exports.create = create;