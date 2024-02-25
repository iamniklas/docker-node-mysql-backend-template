"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // Adjust based on your actual file structure
function setupExampleRoute(app) {
    app.get("/example", (req, res, next) => {
        database_1.default
            .select('id', 'info')
            .from('Example_Table')
            .then(result => {
            const [rows] = result;
            res.json(result);
        })
            .catch(next);
    });
}
exports.default = setupExampleRoute;
