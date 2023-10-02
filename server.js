var http = require("http");
var url = require("url")

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        console.log("Request for !!! " + pathname + " !!! recived");

        var content = route(handle, pathname, request, response);
    }
    http.createServer(onRequest).listen(8070);
}
exports.start = start;