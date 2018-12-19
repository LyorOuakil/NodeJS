var http = require('http');
var fs = require('fs');
var url = require('url');

var create = function (port) {
    var server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let query  = url.parse(req.url, true).query; // parse url to get only the query
        let name = query.name === undefined ? 'travelers' : query.name;
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if(err){ // In case of error send 404 error
                res.writeHead(404);
                res.write('File not found!');
            }
                data = String(data).replace("{{ name }}", name);
             res.end(data); //send data to html file
        })
    })   
    return server.listen(port); // launch server
}
module.exports.create = create; // export module 