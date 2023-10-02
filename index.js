
var server = require("./server");
var router = require("./router");
var requesthandelers = require("./requesthandelers");

var handle = {};

handle["/"] = requesthandelers.start;
handle["/start"] = requesthandelers.start;

handle["/dataService", "POST"] = requesthandelers.POST;
handle["/dataService", "GET"] = requesthandelers.GET;
handle["/dataService", "PUT"] = requesthandelers.PUT;
handle["/dataService", "DELETE"] = requesthandelers.DELETE;

server.start(router.route, handle);


/*var RequestHandeler=require("./RequestHandeler.js")
var handle = {};

handle["/"] = RequestHandeler.RequestHandeler;
handle["/start"] = RequestHandeler.RequestHandeler;
if(handle["/dataService"]) {
   
handle["/dataService", "POST"] = RequestHandeler.requesthandelers.POST;
handle["/dataService", "GET"] = RequestHandeler.requesthandelers.GET;
handle["/dataService", "PUT"] = RequestHandeler.requesthandelers.PUT;
handle["/dataService", "DELETE"] = RequestHandeler.requesthandelers.DELETE;
}else{
console.log(" No reqest handeler found for" + handle);
}

server.start(router.route, handle);*/






