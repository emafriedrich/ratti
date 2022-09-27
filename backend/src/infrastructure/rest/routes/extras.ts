import express, { Router } from 'express';
import { allExtras } from '../controllers/extras';

export default function(app: express.Application) {
  const router = Router();
  router.get('/', allExtras);
  app.use('/extras', router);
}

