"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupEmployeeRoutes(app) {
    app.get("/status", (req, res, next) => {
        res.json({ message: 'OK', status_code: 200 });
    });
}
exports.default = setupEmployeeRoutes;
