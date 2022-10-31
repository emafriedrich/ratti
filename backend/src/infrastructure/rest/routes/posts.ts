import express, { Router } from 'express';
import { getPosts, savePost, getPost } from '../controllers/posts';

export default function(app: express.Application) {
  const router = Router();
  router.post('/', savePost);
  router.get('/', getPosts);
  router.get('/:id', getPost);
  app.use('/posts', router);
}
