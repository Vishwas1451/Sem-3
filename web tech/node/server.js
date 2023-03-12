var http = require('http');
var url = require('url');




http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    var q = url.parse(request.url,true).query
    var txt = q.year + " "+q.month
    // response.end(txt)
    response.write("Hello World\n")
    response.write(request.url)
    response.write("\n")
    response.end(txt)
}).listen(5000);
console.log("Server listening at http://127.0.0.1:5000");