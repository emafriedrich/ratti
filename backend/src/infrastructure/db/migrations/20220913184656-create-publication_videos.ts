import Migration from "./lib/migration"

export default class CreatePublicationVideo extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE publication_videos(
        id SERIAL PRIMARY KEY,
        publication_id bigint(20) unsigned NOT NULL,
        url VARCHAR(5000) NOT NULL,
        video_order INT NOT NULL DEFAULT 0,
        FOREIGN KEY(publication_id) REFERENCES publications(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
