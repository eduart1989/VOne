import express from 'express';
import 'express-async-errors';
import { tenantsRouters } from './routers/tenantsRouters';
import { vehiclesRouters } from './routers/vehiclesRouters';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use('/tenant', tenantsRouters);
app.use('/vehicles', vehiclesRouters);
app.use((err: Error, _req: express.Request, res: express.Response) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
