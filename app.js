var routes        =   require('./routes.js');
var credentials   =   require('./config/secrets.js');
var restify       =   require('restify');









/* EXAMPLE OAUTH WITH TRADEKING */
var OAuth = require('oauth').OAuth;

var oa = new OAuth(null, null, credentials.consumer_key, credentials.consumer_secret, "1.0", null, "HMAC-SHA1");
var request = oa.get("https://stream.tradeking.com/v1/market/quotes.json?symbols=AAPL", 
credentials.access_token, 
credentials.access_secret);

request.on('response', function (response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data);
  })
});
request.end();







var server = restify.createServer();

for(route in routes) {
  if (routes[route].method === 'GET') {
    server.get(route, routes[route].handler);
  }
}

server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});













