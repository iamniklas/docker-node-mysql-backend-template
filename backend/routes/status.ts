// Import necessary types from express
import { Express, Request, Response, NextFunction } from 'express';

export default function setupEmployeeRoutes(app: Express) {
  app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.json({message: 'OK', status_code: 200});
  });
}
