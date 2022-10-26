import Migration from "./lib/migration"

export default class CreatePostFeature extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE posts_features(
        feature_id bigint(20) unsigned NOT NULL,
        post_id bigint(20) unsigned NOT NULL,
        value NUMERIC(10, 2),
        additional_value NUMERIC(10, 2),
        FOREIGN KEY(post_id) REFERENCES posts(id),
        FOREIGN KEY(feature_id) REFERENCES features(id),
        PRIMARY KEY(feature_id, post_id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
