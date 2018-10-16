var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/client/index.html').pipe(res);
    }
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/client/contact.html').pipe(res);
    }
    else if (req.url === '/info'){
        var Obj = {
            name: 'lee',
            age: '29',
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(Obj));
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/client/404.html').pipe(res);
    }
});

server.listen(3000);
console.log('server listening to port 3000');