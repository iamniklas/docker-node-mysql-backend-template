const database = require("../database");

module.exports = function(app){
    app.get("/employees", function(req, res, next) {
        database.raw('SELECT id, first_name, last_name, date_of_employment from Employees;')
        .then(([rows, columns]) => res.json(rows))
        .catch(next);
    });
}