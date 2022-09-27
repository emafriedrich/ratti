import express from 'express';
import { container } from '../../../lib/container';
import GetAllFeatures from '../../use-cases/feature-groups/get-all';
import AllFeaturesSerializer from '../serializers/all-features-serializer';

export async function allFeatures(req: express.Request, res: express.Response) {
  const fg = await container.get(GetAllFeatures).execute();
  res.send(new AllFeaturesSerializer(fg).serialize());
}
