var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.health;
handle["/package"] = requestHandlers.resolvePackage;

server.start(router.route, handle);