"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server")); // Assuming default export; adjust as necessary
const config_1 = __importDefault(require("./config"));
const server = server_1.default.listen(config_1.default, () => {
    console.log(`Webserver is ready on port ${config_1.default.port}`);
});
// Quit on ctrl-c when running docker in terminal
process.on("SIGINT", () => {
    console.info(`Got SIGINT (aka ctrl-c in docker). Graceful shutdown ${new Date().toISOString()}`);
    shutdown();
});
// Quit properly on docker stop
process.on("SIGTERM", () => {
    console.info(`Got SIGTERM (docker container stop). Graceful shutdown ${new Date().toISOString()}`);
    shutdown();
});
// Shut down server
function shutdown() {
    server.close((err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        process.exit(0);
    });
}
