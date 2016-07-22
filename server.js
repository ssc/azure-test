var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    content = ""
    if (req.url == "/nayn-test") {
        head = '<head><title>Awesome stuff</title></head>';
        body = '<h1 style="background-color:white;"> ssc azure homepage! hello napat and ben and jason hello hari hello Ana</h1><div  style="background-color:white;">Code for this here: <a href="https://github.com/ssc/azure-test">https://github.com/ssc/azure-test</a></div>';
        body += '<div style="background-color:white;">$ PORT=8080 node server.js</div>';
        body += '<div style="background-color:white;">Join the chat here: <a href="https://gitter.im/ssc/azure-test">https://gitter.im/ssc/azure-test</a></div>';
        style = '<style>body{background-image: url("http://cdn.nyanit.com/nyan2.gif");background-position: center center;background-size: auto 100%;}</style>'
        content = '<html>' + head + '<text>' + body + '</body>' + style + '</html>';

    }
    else {
        head = '<head><title>ssc-azure-test</title></head>';        
        body = '<h1>Azure Projects</h1>';
        body += "<ul>";
        body += "<li><a href='/nayn-test'>Nayn Test - June 24, 2016</a></li>";
        body += "</ul>";
        content = '<html>' + head + '<text>' + body + '</body>' + style + '</html>';        
    }
    res.end(content);
}).listen(process.env.PORT);
