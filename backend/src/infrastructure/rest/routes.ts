import fs from 'fs';

export function loadRoutes(app: Express.Application) {
  const routes = fs.readdirSync(__dirname + '/routes');
  for (const route of routes) {
    require(`./routes/${route}`).default(app);
  }
}
