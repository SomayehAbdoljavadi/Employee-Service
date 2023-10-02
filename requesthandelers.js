var redisdatabase = require("./GetConnection");
var url = require("url");


//---------------------Post-------POSTEmployee---------------

var POST = (request, response) => {
    var body = [];
    //  if (opration=='add'){
    request.on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            var bodyJson = JSON.parse(body);
            var id = bodyJson.data.username;
            var parent = bodyJson.parent;
            var data = JSON.stringify(bodyJson.data);
            redisdatabase.POST(response, id, data, parent);
        })
}

//---------------------Get------GETEmployee---------------------

var GET = (request, response) => {
    if (url.parse(request.url, false).query.split('=')[0] == "ParentId") {
        var ParentId = url.parse(request.url, true).query.ParentId;
        redisdatabase.GetAllEmployees(response, ParentId)
    } else if (url.parse(request.url, false).query.split('=')[0] == "id") {
        var id = url.parse(request.url, true).query.id;
        redisdatabase.GET(response, id)
    }
}

//---------------------Put----------PUTEmployee-----------------

var PUT = (request, response) => {
    var body = [];
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
        });
}
//------------------DELET------------DELETEmployee------------------------

var DELETE = (request, response) => {
    var body = [];
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
        });
}

exports.POST = POST;
exports.GET = GET;
exports.PUT = PUT;
exports.DELETE = DELETE;