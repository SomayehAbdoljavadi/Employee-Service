

var redisdatabase = require("./GetConnection");
var url = require("url");

exports.PUTEmployee = (request, response) => {
    console.log("PUTEmployee");
/*var body = [];
    request.on('data', (Chunk) => {
            body.push(Chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            var bodyJson = JSON.parse(body);
            var id = bodyJson.id;
            var parent = bodyJson.parent;
            var data = JSON.stringify(bodyJson.data);
            redisdatabase.PUT(response, id, data, parent);
        }); */
    
}
