import 'reflect-metadata';

import { Props } from "../../../domain/entities/feature-group";
import FeatureGroupRepository from "../repositories/feature-groups-repository";

const repo = new FeatureGroupRepository();

const featureGroups: Props[] = [
  {
    title: 'Características principales',
    description: 'Mas datos acerca de la propiedad',
    featureValueType: 'number',
  },
  {
    title: 'Superficie',
    description: '',
    featureValueType: 'number',
  },
  {
    title: 'Antiguedad',
    description: '',
    featureValueType: 'select',
  },
];


(async () => {
  for (const fg of featureGroups) {
    await repo.save(fg);
  }
  process.exit(0);
})();