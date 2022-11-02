import fs from 'fs';

export function loadRoutes(app: Express.Application) {
  const routes = fs.readdirSync(__dirname + '/routes');
  const sourceFiles = routes.filter(r => r.endsWith('.js') || r.endsWith('.ts')); // to make work with ts-node and node
  for (const route of sourceFiles) {
    require(`./routes/${route}`).default(app);
  }
}
