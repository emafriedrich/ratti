import Migration from "./lib/migration"

export default class CreateExtra extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE extras(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        value_type ENUM('checkbox', 'select', 'text') NOT NULL DEFAULT 'checkbox',
        posible_values JSON,
        extra_group_id bigint(20) unsigned NOT NULL,
        FOREIGN KEY(extra_group_id) REFERENCES extra_groups(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
