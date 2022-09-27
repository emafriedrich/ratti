import Migration from "./lib/migration"

export default class CreatePublicationFeature extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE publication_features(
        id SERIAL PRIMARY KEY,
        feature_id bigint(20) unsigned NOT NULL,
        publication_id bigint(20) unsigned NOT NULL,
        value NUMERIC(10, 2),
        additional_value NUMERIC(10, 2),
        FOREIGN KEY(publication_id) REFERENCES publications(id),
        FOREIGN KEY(feature_id) REFERENCES features(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
