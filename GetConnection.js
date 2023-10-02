//----------------create Redis  connection---------------------
const redis = require('redis'); //import readis
const {
    promisify
} = require("util");
const client = redis.createClient("6379", "127.0.0.1"); //create connection

client.on('connect', () => {
    console.log("Client Connected To Redis  !!!!! ");
});
client.on("error", (err) => {
    console.error("Error !!! ", err.message);
});

//-------------Promise-Function---------------------
const hgetAsync = promisify(client.hget).bind(client);
const hdelAsync = promisify(client.hdel).bind(client);
const hmsetAsync = promisify(client.hmset).bind(client);
const hgetallAsync = promisify(client.hgetall).bind(client)

//----------Post-------Insert User-----------------

var POST = (response, id, data, parent) => {
    client.select(0)
    hgetAsync("dataStorage", id).then(reply => { //search id in data storeage 
        if (reply !== null) {
            response.writeHead(400, {
                "Content-Type": "application/json"
            });
            response.end("ERRoR EmployeeService   " + id + '   Exists in DataStoreage !!!');
        } else hgetAsync("dataMap", id).then(reply => { //search id in data Map 
            if (reply !== null) {
                response.writeHead(400, {
                    "Content-Type": "application/json"
                });
                response.end("ERRoR EmployeeService   " + id + '   exists in DataMap!!!');
            } else {
                hmsetAsync("dataStorage", `${id}`, `${data}`).then(reply => { //save reacod in DataStoreage
                }).catch(err => {
                    response.end("Cant Save Recorde in DataStorage");
                })
                hmsetAsync("dataMap", `${id}`, `${parent}`).then(reply => {
                    response.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    response.end(` Adedd User id : ${id}`);
                }).catch(err => {
                    response.end("ERRoR EmployeeService Cant Save Rcorde in DataMap");
                })
            }
        }).catch(err => {
            response.end("ERRoR EmployeeService  IN Post Data Finde " + id + " in DataMap");
        })
    }).catch(err => {
        response.end("ERRoR EmployeeService IN Post Data Finde " + id + " in DataStoreage ")
    })
}

//--------------------Get---------Select User----------------------

var GET = (response, id) => {
    client.select(0)
    hgetAsync("dataStorage", id).then(reply => { //search id in data storeage 
        if (reply !== null) {
            response.end(reply);
        }
    }).catch(err => {
        response.end("ERRoR EmployeeService IN GET Data Cant Finde " + id + " in DataStoreage ")
    })
}


var GetAllEmployees = (response, ParentId) => {
    hgetallAsync("dataMap").then(datamap => {
        if (datamap !== null) {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            let EmployeesId = Object.keys(datamap).filter((id) => {
                if (datamap[id] === ParentId && id !== ParentId) {
                    return id
                }
            })
            response.end(JSON.stringify(EmployeesId))
        } else {
            response.writeHead(400, {
                "Content-Type": "application/json"
            });
            response.end("id not exists 400 ERR")

        }
    }).catch(err => {
               response.end(err)
    })
}


//----------------------PUT-------Update User-----------------------------------

var PUT = (response, id, data, parent) => {
    client.select(0);
    hgetAsync("dataStorage", id).then(reply => { //search in Data Storeage
        if (reply !== null) {
            hmsetAsync("dataStorage", `${id}`, `${data}`).then(reply => {}).catch(err => {
                response.end("ERR EmployeeService  Put in DataStoreage")
            })
            hgetAsync("dataMap", id).then(reply => { //Search in DataMAp
                if (reply !== null) {
                    hmsetAsync("dataMap", `${id}`, `${parent}`).then(reply => {
                        response.end(`Id: ${id} , Data : ${data}`)
                    }).catch(err => {
                        response.end(" ERR EmployeeService   PUT in DataMap")
                    })
                }
            }).catch(err => {
                response.end("ERR EmployeeService GET from DataMAp")
            })
        }
    }).catch(err => {
        response.end("ERR EmployeeService GET from DataStoreag")
    })
}
//----------------------DELET-------DELET User-----------------------------------

var DELETE = (response, id, data, parent) => {
    client.select(0);
    hgetAsync("dataStorage", id).then(reply => { //search in Data Storeage
        if (reply !== null) {
            hdelAsync("dataStorage", `${id}`).then(reply => {}).catch(err => {
                response.end("ERR EmployeeService   DELETE in DataStoreage")
            })
            hgetAsync("dataMap", id).then(reply => { //Search in DataMAp
                if (reply !== null) {
                    hdelAsync("dataMap", `${id}`).then(reply => {
                        response.end(`EmployeeService DELETED From DataMap id: ${id} , parent : ${parent}`)
                    }).catch(err => {
                        response.end(" ERR EmployeeService DELETE  DataMap")
                    })
                }
            }).catch(err => {
                response.end("ERR EmployeeService GET from DataMAp")
            })
        }
    }).catch(err => {
        response.end("ERREmployeeService  GET from DataStoreag")
    })
}
exports.POST = POST;
exports.GET = GET;
exports.PUT = PUT;
exports.DELETE = DELETE;
exports.GetAllEmployees = GetAllEmployees;