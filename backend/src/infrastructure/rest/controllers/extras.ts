import express from 'express';
import { container } from '../../../lib/container';
import GetAllExtras from '../../use-cases/extra-groups/get-all';
import AllExtrasSerializer from '../serializers/all-extras-serializer';

const allExtrasUseCase = container.get(GetAllExtras);

export async function allExtras(req: express.Request, res: express.Response) {
  const extras = await allExtrasUseCase.execute();
  res.send(new AllExtrasSerializer(extras).serialize());
}
