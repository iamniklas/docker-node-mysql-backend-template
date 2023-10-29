const database = require("../database");

module.exports = function(app){
    app.get("/status", function(req, res) {
        // do app logic here to determine if app is truly healthy
        // you should return 200 if healthy, and anything else will fail
        // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
        res.json({message: 'OK', status_code: 200});
    });
}