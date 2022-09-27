import Migration from "./migration";

export class MigrationRunner {
  migration: Migration;
  connection: any;

  constructor(migration, connection) {
    this.migration = migration;
    this.connection = connection;
  }

  async runMigration() {
    const match = this.migration.filename().match(/\d+/)!;
    const migration = match[0];
    const existsMigration = await this.existsMigration(migration);
    if (existsMigration === false) {
      console.log(`Executing migration ${migration}`);
      try {
        await this.connection.promise().query('BEGIN');
        await this.connection.promise().query(`
            INSERT INTO migrations(id) VALUES (${migration})
          `);
        await this.migration.up();
        await this.connection.promise().query('COMMIT');
        return true;
      } catch (error) {
        console.error(error);
        this.connection.promise().query('ROLLBACK');
        process.exit(1); // break due to dependency of upcoming migrations on this failed migration
      }
    }
    return false;
  }

  async existsMigration(migration) {
    const result = await this.connection.promise().query(`
    SELECT id FROM migrations WHERE id = ?
    `, [
      migration,
    ]);
    const row = result[0][0];
    return !!row?.id;
  }
}