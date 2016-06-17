var azure = require('azure-storage');

var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    head = '<head><title>Awesome stuff</title></head>';
    text = '<h1>ssc azure homepage! hello napat and ben and jason hello</h1>Code for this here:<a href="https://github.com/ssc/azure-test">https://github.com/ssc/azure-test</a>\n';
    text += '<div>$ PORT=8080 node server.js</div>';
    content = '<html>' + head + '<text>' + body + '</body></html>'; 
    res.end(content);
}).listen(process.env.PORT);
