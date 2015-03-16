var Hapi = require('hapi');
var pkg = require('./package');

var server = new Hapi.Server();

server.connection({
    port: 8000
});

server.route({
    method: 'GET',
    path: '/version',
    handler: function(request, reply) {
        reply({
            version: pkg.version
        });
    }
});

server.start(function(err) {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log('Server version', pkg.version, 'started listening at:', server.info.uri);
});
