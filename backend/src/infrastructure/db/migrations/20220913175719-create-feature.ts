import Migration from "./lib/migration"

export default class CreateFeature extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE features(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        optional VARCHAR(100) NOT NULL,
        max_value NUMERIC(10, 2),
        min_value NUMERIC(10, 2),
        value_sufix VARCHAR(10),
        additional_value BOOLEAN DEFAULT false,
        feature_group_id bigint(20) unsigned NOT NULL,
        posible_values JSON,
        FOREIGN KEY(feature_group_id) REFERENCES feature_groups(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
