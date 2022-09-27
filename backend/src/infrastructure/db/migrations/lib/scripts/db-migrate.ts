import { connection } from "../../../connection";
import { MigrationRunner } from "../migration-runner";

const fs = require('fs');

const migrationsFolder = __dirname.concat('/../../');
const migrationFileNames = fs.readdirSync(migrationsFolder).filter((file) => file.includes('.ts'));

const migrations = migrationFileNames.map((m) => require(migrationsFolder.concat(m)));

(async () => {
  let pendingMigrations = 0;
  for (const Migration of migrations) {
    const migration = new Migration.default(connection);
    const runner = new MigrationRunner(migration, connection);
    try {
      const ran = await runner.runMigration();
      pendingMigrations += ran ? 1 : 0;
    } catch (e) {
      console.error(e);
    }
  }
  console.log(`${pendingMigrations} pending migrations executed`);
  process.exit(0);
})();
