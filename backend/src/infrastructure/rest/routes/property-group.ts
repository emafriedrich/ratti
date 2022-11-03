import express, { Router } from 'express';
import { getAll } from '../controllers/property-groups';

export default function(app: express.Application) {
  const router = Router();

  router.get('/', getAll);

  app.use('/property-groups', router);
}
