var redisdatabase = require("./GetConnection");

exports.GetEmployeeInfo = (respons, EmployeeId) => {
    redisdatabase.GET(respons, EmployeeId)
    resolve(respons)
}