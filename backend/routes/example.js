const database = require("../database");

module.exports = function(app){
    app.get("/example", function(req, res, next) {
        database.raw('SELECT id, info from Example_Table;')
        .then(([rows, columns]) => res.json(rows))
        .catch(next);
    });
}