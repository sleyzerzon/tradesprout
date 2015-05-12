function respondHello(req, res, next) {
  res.send('Hello, ' + req.params.name);
  next();
}

function respondBye(req, res, next) {
  res.send('Goodbye, ' + req.params.name);
  next();
}

function helloWorld(req, res, next) {
  res.send('Hello, world!');
  next();
}



module.exports = {
    '/': {
        method:       'GET',
        path:         '/',
        handler:      helloWorld
    },
    '/hello/:name': {
        method:       'GET',
        path:         '/hello/:name',
        handler:      respondHello
    },
    '/goodbye/:name': {
        method:       'GET',
        path:         '/goodbye/:name',
        handler:      respondBye
    }
};