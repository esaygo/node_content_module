var fs = require('fs');
var path = require('path');
module.exports = function(request, response){
  //response.writeHead(200, {'Content-type': 'text/html'});

  //console.log(fs);
  console.log(path);
  if(fs.exists) {
  if(request.url === '/' ){
    fs.readFile('./views/index.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else {
    fs.readFile('.'+ path.dirname(request.url)+'/'+path.basename(request.url), function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
}

   else {
      response.end('File not found!!!');
   }

}
