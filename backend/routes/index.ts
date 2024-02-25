// Import necessary types from express
import { Express, Request, Response, NextFunction } from 'express';
import db from '../database'; // Adjust the import path based on your project structure

// Type definition for the row structure returned by the database query
interface VersionRow {
  version: string;
}

export default function setupRoutes(app: Express) {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    db.raw<VersionRow[]>('SELECT VERSION() version')
      .then(result => {
        const rows = result[0];
        if (result.length > 0) {
          const row = result[0];
          res.json({ message: `Hello from MySQL ${row.version}` });
        } else {
          throw new Error('No version information found');
        }
      })
      .catch(next);
  });
}
