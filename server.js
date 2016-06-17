var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>ssc azure homepage! hello napat and ben and jason</h1>Code for this here:<a href="https://github.com/ssc/azure-test">https://github.com/ssc/azure-test</a>');
}).listen(process.env.PORT);
