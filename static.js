module.exports = function(request, response){
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  var fs = require('fs');
  if(request.url === '/'){
    fs.readFile('views/index.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/dojo'){
    fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/stylesheet/style.css'){
    fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else {
      response.end('File not found!!!');
  }

}
