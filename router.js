const redis = require('redis'); //import readis

function route(handle, pathname, request, response) {

    var client = redis.createClient("6379", "127.0.0.1"); //create connection

    client.on("connect", function () {
        
        ///*************** */

        if((typeof handle[pathname],[request.method] === 'function')) {

            return handle[pathname, request.method](request, response);

        } else {
            response.end(" No reqest handeler found for" + pathname);
        }
    });

    client.on("error", (err) => {
        response.writeHead(500, {
            'Content-Type': 'application/json'
        });
        response.end('DataBase Connection Error');
    });
}

exports.route = route;