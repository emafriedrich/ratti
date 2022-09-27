import 'reflect-metadata';

import ExtrasRepository from "../repositories/extras-repository";

const repo = new ExtrasRepository();

const extraGroups = [
  'Caracteristicas generales',
  'Caracteristicas',
  'Servicios',
  'Ambientes',
];

(async () => {
  for (const extraGroup of extraGroups) {
    await repo.saveExtraGroup({
      title: extraGroup,
      description: '',
      type: 'checkboxes'
    });
  }
  await repo.saveExtraGroup({
    title: 'Adicionales',
    description: '',
    type: 'another'
  });
  process.exit(0);
})();