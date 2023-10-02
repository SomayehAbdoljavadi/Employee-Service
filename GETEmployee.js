

var redisdatabase = require("./GetConnection");
var url = require("url");

exports.GETEmployee = (request, response) => {
    console.log("GETEmployee");
/*if (url.parse(request.url, false).query.split('=')[0] == "ParentId") {
        var ParentId = url.parse(request.url, true).query.ParentId;
        redisdatabase.GetAllEmployees(response, ParentId)
    } else if (url.parse(request.url, false).query.split('=')[0] == "id") {
        var id = url.parse(request.url, true).query.id;
        redisdatabase.GET(response, id)
    }*/ 
    
}
