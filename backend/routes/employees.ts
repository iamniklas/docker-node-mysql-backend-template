// Import necessary types from express
import { Express, Request, Response, NextFunction } from 'express';
import db from '../database'; // Adjust the import path based on your project structure

// Type definition for the row structure returned by the database query
interface EmployeeRow {
  id: string;
  first_name: string;
  last_name: string;
  date_of_employement: string;
}

export default function setupEmployeeRoutes(app: Express) {
  app.get("/employees", (req: Request, res: Response, next: NextFunction) => {
    db.raw<EmployeeRow[]>('SELECT id, first_name, last_name, date_of_employment from Employees;')
      .then(([rows, columns]) => {
        res.json(rows);
      })
      .catch(next);
  });
}
