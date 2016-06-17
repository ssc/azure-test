var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    head = '<head><title>Awesome stuff</title></head>';
    body = '<h1> ssc azure homepage! hello napat and ben and jason hello</h1>Code for this here:<a href="https://github.com/ssc/azure-test">https://github.com/ssc/azure-test</a>\n';
    body += '<div>$ PORT=8080 node server.js</div>';
    style = '<style>body{background-image: url("http://cdn.nyanit.com/nyan2.gif");background-position: center center;background-size: auto 100%;}</style>'
    content = '<html>' + head + '<text>' + body + '</body>' + style + '</html>'; 
    res.end(content);
}).listen(process.env.PORT);
