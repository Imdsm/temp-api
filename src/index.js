var restify = require('restify');

var server = new restify.createServer();

server.get('/', function(req, res, next) {
    req.send('hello world');
});

server.listen(process.env.PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
})
