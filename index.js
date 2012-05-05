var server = require('./server'),
    router = require('./router'),
    handlers = require('./subscriptions');

var handle = {}
handle["/home/getpluginmetadata"] = handlers.getPlugins;
handle["/servicedesk/products"] = handlers.getProducts;

server.start(router.route, handle);
