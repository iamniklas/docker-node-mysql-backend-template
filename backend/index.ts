import app from "./server"; // Assuming default export; adjust as necessary
import port from "./config";

const server = app.listen(port, () => {
  console.log(`Webserver is ready on port ${port.port}`);
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
  server.close((err?: Error) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
}
