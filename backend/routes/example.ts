import { Express, Request, Response, NextFunction } from 'express';
import db from '../database'; // Adjust based on your actual file structure

// Assuming the structure of your rows matches this interface
interface ExampleRow {
  id: number;
  info: string;
}

export default function setupExampleRoute(app: Express) {
  app.get("/example", (req: Request, res: Response, next: NextFunction) => {
    db.raw<ExampleRow[]>('SELECT id, info FROM Example_Table;')
      .then(result => {
        const [rows] = result;
        res.json(rows);
      })
      .catch(next);
  });
}
