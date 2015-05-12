var routes    =   require('./routes.js');
var restify   =   require('restify');

var server = restify.createServer();

var numberOfRoutes = routes.length;
for(var i=0; i < numberOfRoutes; i++) {
  if (routes[i].method === 'GET') {
    server.get(routes[i].path, routes[i].handler);
  }
  else if (routes[i].method === 'HEAD') {
    server.head(routes[i].path, routes[i].handler);
  }
}

server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});