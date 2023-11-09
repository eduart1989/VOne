import express, { Request, Response, Router } from 'express';
import { findRecords } from '../operations/crud';
import { Priceboard, Tenant } from 'src/db/types';

export const tenantsRouters: Router = express.Router();

tenantsRouters.get('/', async (_req: Request, res: Response) => {
  const tenants = await findRecords<Tenant>('tenant');
  res.status(200).json(tenants);
});

tenantsRouters.get('/:tenantId/priceboards', async (req: Request, res: Response) => {
  const tenantId = req.params.tenantId;
  const results = await findRecords<Priceboard>('priceboard', undefined, { tenant_id: tenantId });
  res.status(200).json(results);
});
