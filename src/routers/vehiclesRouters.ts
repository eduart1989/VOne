import express, { Request, Response, Router } from 'express';
import { createRecord, findRecords } from '../operations/crud';
import { Vehicle } from 'src/db/types';

export const vehiclesRouters: Router = express.Router();

vehiclesRouters.get('/', async (_req: Request, res: Response) => {
  const tenants = await findRecords<Vehicle>('vehicles');
  res.status(200).json(tenants);
});

vehiclesRouters.post('/', async (req: Request, res: Response) => {
  const results = await createRecord<Vehicle>('vehicles', req.body);
  res.status(200).json(results);
});
