import Migration from "./lib/migration"

export default class CreateFeatureGroup extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE feature_groups(
        id SERIAL PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(100) NOT NULL DEFAULT '',
        feature_value_type ENUM('number', 'select')
      )
    `);
  }


  filename() {
    return __filename;
  }
}
