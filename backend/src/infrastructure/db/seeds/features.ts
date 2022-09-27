import 'reflect-metadata';

import { Props } from "../../../domain/entities/feature";
import Featurepository from "../repositories/feature-repository";

const featureRepository = new Featurepository();

const forGroup1 = {
  optional: true,
  additionalValue: false,
  featureGroupId: 1,
};

const forGroup2 = {
  optional: false,
  additionalValue: false,
  valueSufix: 'm2',
  featureGroupId: 2,
};

const features: Props[] = [
  {
    name: 'Ambientes',
    ...forGroup1,
  },
  {
    name: 'Dormitorios',
    ...forGroup1,
  },
  {
    name: 'Baños',
    ...forGroup1,
  },
  {
    name: 'Toilettes',
    ...forGroup1,
  },
  {
    name: 'Cocheras',
    ...forGroup1,
  },
  {
    name: 'Superficie cubierta',
    ...forGroup2,
  },
  {
    name: 'Superficie total',
    ...forGroup2,
  },
  {
    name: 'Antiguedad',
    optional: false,
    additionalValue: true,
    featureGroupId: 3,
    posibleValues: [
      {
        value: 'A estrenar'
      },
      {
        value: 'Años de antiguedad',
        additionalValue: true,
      },
      {
        value: 'En construcción',
      }
    ]
  }
];

(async () => {
  for (const feature of features) {
    await featureRepository.save(feature);
  }
  process.exit(0);
})();