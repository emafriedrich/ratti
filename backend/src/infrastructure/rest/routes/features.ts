import express, { Router } from 'express';
import { allFeatures } from '../controllers/features';

export default function(app: express.Application) {
  const router = Router();
  router.get('/', allFeatures);
  app.use('/features', router);
}
