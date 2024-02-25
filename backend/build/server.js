"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// Import routes as functions accepting an Express application.
// The exact import paths may need to be adjusted based on your project structure.
const index_1 = __importDefault(require("./routes/index"));
const employees_1 = __importDefault(require("./routes/employees"));
const example_1 = __importDefault(require("./routes/example"));
const status_1 = __importDefault(require("./routes/status"));
// API initialization
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("common"));
// Setup routes
(0, index_1.default)(app);
(0, employees_1.default)(app);
(0, example_1.default)(app);
(0, status_1.default)(app);
exports.default = app;
