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
    db // Specifies the table to query
      .select('id', 'first_name', 'last_name', 'date_of_employment') // Specifies the columns to retrieve
      .from('Employees')
      .then(rows => {
        const typedRows: EmployeeRow[] = rows as EmployeeRow[];
        res.json(typedRows); // Sends the result back as JSON
      })
      .catch(next); // Error handling
  });
}
