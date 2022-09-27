import Migration from "./lib/migration"

export default class CreatePublicationImage extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE publication_images(
        id SERIAL PRIMARY KEY,
        publication_id bigint(20) unsigned NOT NULL,
        path VARCHAR(3000) NOT NULL,
        image_order INT NOT NULL DEFAULT 0,
        plan BOOLEAN DEFAULT false,
        FOREIGN KEY(publication_id) REFERENCES publications(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
