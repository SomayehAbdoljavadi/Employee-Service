var redisdatabase = require("./GetConnection");
var url = require("url");

var POSTEmployee = require('./POSTEmployee');
var GETEmployee = require('./GETEmployee');
var PUTEmployee = require('./PUTEmployee');
var DELETEmployee = require('./DELETEmployee');


exports.RequestHandeler = {

    POST: {
    
        function:POSTEmployee.POSTEmployee
    },
    GET: {
        
        function: GETEmployee.GETEmployee
        
    },
    PUT: {
        function: PUTEmployee.PUTEmployee
    },
    DELETE: {
        function: DELETEmployee.DELETEmployee
    }


}