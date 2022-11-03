import 'reflect-metadata';

import { PropertyGroupRepository } from "../repositories/property-group-repository";

const repo = new PropertyGroupRepository();

const apartments = 'Charlotte Belgrano,Velvet,Marwa,WindHouse,Kona 21°,Velas'.split(',');

const lands = 'Los Jilgueros,Las Calandrias,Puerto Laurel'.split(',');

(async () => {
  for (const apartment of apartments) {
    await repo.save({
      type: 'apartments',
      name: apartment,
    });
  }
  for (const land of lands) {
    await repo.save({
      type: 'lands',
      name: land,
    });
  }
  process.exit(0);
})();