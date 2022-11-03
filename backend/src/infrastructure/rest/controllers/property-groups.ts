import express from 'express';
import { container } from '../../../lib/container';
import GetAllPropertyGroups from '../../use-cases/property-groups/get-all';

export async function getAll(req: express.Request, res: express.Response) {
  const useCase = container.get(GetAllPropertyGroups);
  const propertyGroups = await useCase.execute();
  res.send(propertyGroups);
}