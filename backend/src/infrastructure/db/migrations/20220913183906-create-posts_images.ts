import Migration from "./lib/migration"

export default class CreatePostImage extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE posts_images(
        id SERIAL PRIMARY KEY,
        post_id bigint(20) unsigned NOT NULL,
        path VARCHAR(3000) NOT NULL,
        image_order INT NOT NULL DEFAULT 0,
        plan BOOLEAN DEFAULT false,
        FOREIGN KEY(post_id) REFERENCES posts(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
