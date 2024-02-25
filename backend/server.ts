import express from "express";
import morgan from "morgan";

// Assuming your database module can be imported directly.
// You may need to adjust this import if your database module exports multiple items or uses default export.
import database from "./database";

// Import routes as functions accepting an Express application.
// The exact import paths may need to be adjusted based on your project structure.
import setupIndexRoutes from "./routes/index";
import setupEmployeeRoutes from "./routes/employees";
import setupExampleRoutes from "./routes/example";
import setupStatusRoutes from "./routes/status";

// API initialization
const app = express();

app.use(morgan("common"));

// Setup routes
setupIndexRoutes(app);
setupEmployeeRoutes(app);
setupExampleRoutes(app);
setupStatusRoutes(app);

export default app;
