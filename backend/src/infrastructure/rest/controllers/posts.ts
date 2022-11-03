import express from 'express';
import { container } from '../../../lib/container';
import GetPost from '../../use-cases/posts/get-post';
import GetPosts from '../../use-cases/posts/get-posts';
import SavePost from '../../use-cases/posts/save-post';

export async function savePost(req: express.Request, res: express.Response) {
  await container.get(SavePost).execute(req.body);
  res.send();
}

export async function getPosts(req: express.Request, res: express.Response) {
  const useCase = container.get(GetPosts);
  const posts = await useCase.execute(req.query.propertyType as string, +(req.query.propertyGroupId as string));
  res.send(posts);
}

export async function getPost(req: express.Request, res: express.Response) {
  const useCase = container.get(GetPost);
  const posts = await useCase.execute(+req.params.id);
  res.send(posts);
}
