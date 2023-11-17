var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    /*괄호 안의 __dirname 과 url을 이용해 http요청을 처리하게 되는 것이 Node.js의 최종적인 목표이자 줄기*/
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
