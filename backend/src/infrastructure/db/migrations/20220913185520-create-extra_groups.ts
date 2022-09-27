import Migration from "./lib/migration"

export default class CreateFeatureGroup extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE extra_groups(
        id SERIAL PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        type enum('checkboxes', 'another'),
        description VARCHAR(100) NOT NULL
      )
    `);
  }


  filename() {
    return __filename;
  }
}
