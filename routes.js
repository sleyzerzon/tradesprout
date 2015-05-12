function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function helloWorld(req, res, next) {
  res.send('Hello, world!');
  next();
}

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: helloWorld
  },
  {
    method: 'GET',
    path: '/hello/:name',
    handler: respond
  },
  {
    method: 'HEAD',
    path: '/hello/:name',
    handler: respond
  }
];