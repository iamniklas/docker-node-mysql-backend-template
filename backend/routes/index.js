const database = require("../database");

module.exports = function(app){
    app.get("/", function(req, res, next) {
        database.raw('select VERSION() version')
            .then(([rows, columns]) => rows[0])
            .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))    
            .catch(next);
    });
}