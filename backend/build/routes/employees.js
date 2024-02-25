"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // Adjust the import path based on your project structure
function setupEmployeeRoutes(app) {
    app.get("/employees", (req, res, next) => {
        database_1.default // Specifies the table to query
            .select('id', 'first_name', 'last_name', 'date_of_employment') // Specifies the columns to retrieve
            .from('Employees')
            .then(rows => {
            const typedRows = rows;
            res.json(typedRows); // Sends the result back as JSON
        })
            .catch(next); // Error handling
    });
}
exports.default = setupEmployeeRoutes;
