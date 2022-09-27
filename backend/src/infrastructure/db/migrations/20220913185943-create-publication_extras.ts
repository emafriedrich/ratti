import Migration from "./lib/migration"

export default class CreatePublicationExtra extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE publication_extras(
        id SERIAL PRIMARY KEY,
        publication_id bigint(20) unsigned NOT NULL,
        extra_id bigint(20) unsigned NOT NULL,
        value VARCHAR(255),
        FOREIGN KEY(publication_id) REFERENCES publications(id),
        FOREIGN KEY(extra_id) REFERENCES extras(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
