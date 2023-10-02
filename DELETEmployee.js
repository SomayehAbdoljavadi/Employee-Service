

var redisdatabase = require("./GetConnection");
var url = require("url");

exports.DELETEmployee = (request, response) => {
    console.log("DELETEmployee");
    /*var body = [];
    request.on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            var bodyJson = JSON.parse(body);
            var id = bodyJson.id;
            var parent = bodyJson.parent;
            var data = JSON.stringify(bodyJson.data);
            redisdatabase.DELETE(response, id, data, parent);
        }); */

    
}
