import knex from 'knex';
import database from './config';

// Assuming your `database` object in the config file is correctly typed,
// or you could define an interface for it for better type safety.
interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port?: number; // Optional depending on your configuration
}

// Initialize Knex with the database configuration.
// The explicit typing for `database` as `DatabaseConfig` is optional
// and beneficial if you want strict typing for your configuration.
const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST || "localhost",
    port: 8080,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});

export default db;
