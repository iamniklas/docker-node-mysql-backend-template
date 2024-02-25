"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
// Initialize Knex with the database configuration.
// The explicit typing for `database` as `DatabaseConfig` is optional
// and beneficial if you want strict typing for your configuration.
const db = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: process.env.DATABASE_HOST || "localhost",
        port: process.env.PORT ? Number(process.env.PORT) : undefined,
        database: process.env.DATABASE_DB,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    },
});
exports.default = db;
