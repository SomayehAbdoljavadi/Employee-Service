var redisdatabase = require("./GetConnection");
var url = require("url");

exports.POSTEmployee = (request, response) => {
    console.log("POSTEmployee");

   /* var body = [];
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
        })*/

}
