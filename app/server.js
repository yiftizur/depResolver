const http = require("http");
const url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        let parsedUrl = url.parse(request.url, true);
        var pathname = parsedUrl.pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, parsedUrl, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;


