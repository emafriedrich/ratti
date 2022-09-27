import 'reflect-metadata';
import { container } from '../../../lib/container';

import ExtrasRepository from "../repositories/extras-repository";

const repo = container.get(ExtrasRepository);

const extrasGroup1 = [
  'Acceso para personas con movilidad reducida',
  'Apto profesional',
  'Gimnasio',
  'Hidromasaje',
  'Parilla',
  'Permite mascotas',
  'Pileta',
  'Sala de juegos',
  'Solarium',
  'Uso comercial'
];

const extrasGroup2 = [
  'Aire acondicionado',
  'Alarma',
  'Amoblado',
  'Caldera',
  'Calefacción',
  'Cancha deportes',
  'Cocina equipada',
  'Frigobar',
  'Lavarropas',
  'Lavavajillas',
  'Microondas',
  'Quincho',
  'SUM',
  'Sauna',
  'Secarropas',
  'Termotanque',
  'Vigilancia',
];

const extrasGroup3 = [
  'Ascensor',
  'Caja fuerte',
  'Laundry',
];

const extrasGroup4 = [
  'Balcón',
  'Baulera',
  'Cocina',
  'Comedor',
  'Comedor de diario',
  'Dependencia servicio',
  'Dormitorio en suite',
  'Escritorio',
  'Hall',
  'Jardín',
  'Lavadero',
  'Living',
  'Living comedor',
  'Patio',
  'Sótano',
  'Terraza',
  'Toilette',
  'Vestidor',
];

const extrasGroup5 = [
  { name: 'Cantidad plantas', valueType: 'select', posibleValues: [1, 2, 3, 4, '5 o mas'] },
  { name: 'Cobertura cochera', valueType: 'select', posibleValues: ['Cubierta', 'Semicubierta', 'Descubierta'] },
  { name: 'Disposicion', valueType: 'select', posibleValues: 'Frente,ContraFrente,Interno,Lateral'.split(',') },
  { name: 'Luminosidad', valueType: 'select', posibleValues: 'Muy luminoso,Luminoso,Poco luminoso'.split(',')},
  { name: 'Orientacion', valueType: 'select', posibleValues: 'N,S,E,O,NE,NO,SE,SO'.split(',')},
  { name: 'Cantidad pisos en edificio', valueType: 'text' },
  { name: 'Departamentos por piso', valueType: 'text' },
];

(async () => {
  await saveCheckboxExtras(extrasGroup1, 1);
  await saveCheckboxExtras(extrasGroup2, 2);
  await saveCheckboxExtras(extrasGroup3, 3);
  await saveCheckboxExtras(extrasGroup4, 4);
  for (const extra of extrasGroup5) {
    //@ts-ignore
    await repo.saveExtra({ ...extra, extra_group_id: 5, value_type: extra.valueType });
  }
  process.exit(0);
})();

async function saveCheckboxExtras(extras, group) {
  for (const extra of extras) {
    await repo.saveExtra({
      name: extra,
      value_type: 'checkbox',
      extra_group_id: group,
    });
  }
}
