var http = require("http");

var server = http.createServer(function(request, response){
    console.log('request received')
    response.end('Hello World to Browser');
})

server.listen(process.env.PORT || 4040, function () {
    console.log('Example app listening on port 4040!');
});
console.log('Server running as http://127.0.0.1:4040');