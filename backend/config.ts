import * as fs from "fs";

// Optionally, define a type for the configuration object
interface DatabaseConfig {
  host: string;
  port: string;
  database: string;
  user: string;
  password: string;
}

interface AppConfig {
  database: DatabaseConfig;
  port: string | number;
}

const readFileSync = (filename: string): string => fs.readFileSync(filename, { encoding: "utf8" });

// Constants
const config: AppConfig = {
  database: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT || "",
    database: process.env.DATABASE_DB || "",
    user: process.env.DATABASE_USER || "",
    password: process.env.DATABASE_PASSWORD || "",
  },
  port: parseInt(process.env.PORT || "") || 3000,
  // if you're not using docker compose for local development, this will default to 8080
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :)
};

export default config;
