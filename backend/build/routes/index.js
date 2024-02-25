"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // Adjust the import path based on your project structure
function setupRoutes(app) {
    app.get("/", (req, res, next) => {
        database_1.default.raw('SELECT VERSION() as version')
            .then((result) => {
            // Accessing the result correctly depends on the structure of the returned data
            // The structure can vary based on the database driver or ORM you're using
            let versionRow;
            if (Array.isArray(result)) {
                // For some configurations, the actual result is in the first element of the array
                versionRow = result[0][0]; // Adjust based on your result structure
            }
            else {
                // Directly accessing the result if it's not an array
                versionRow = result[0];
            }
            if (versionRow) {
                res.json({ message: `Hello from MySQL ${versionRow.version}` });
            }
            else {
                throw new Error('No version information found');
            }
        })
            .catch(next);
    });
}
exports.default = setupRoutes;
