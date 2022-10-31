import Migration from "./lib/migration"

export default class CreatePostExtra extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE post_extras(
        post_id bigint(20) unsigned NOT NULL,
        extra_id bigint(20) unsigned NOT NULL,
        value VARCHAR(255),
        FOREIGN KEY(post_id) REFERENCES posts(id),
        FOREIGN KEY(extra_id) REFERENCES extras(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
