import Migration from "./lib/migration"

export default class CreatePropertyGroups extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE property_groups(
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        type VARCHAR(50) NOT NULL,
        name VARCHAR(255) NOT NULL
      )
    `);
  }


  filename() {
    return __filename;
  }
}
