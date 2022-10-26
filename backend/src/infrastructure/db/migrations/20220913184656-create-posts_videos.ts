import Migration from "./lib/migration"

export default class CreatePostVideo extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      CREATE TABLE posts_videos(
        id SERIAL PRIMARY KEY,
        post_id bigint(20) unsigned NOT NULL,
        url VARCHAR(5000) NOT NULL,
        video_order INT NOT NULL DEFAULT 0,
        FOREIGN KEY(post_id) REFERENCES posts(id)
      )
    `);
  }


  filename() {
    return __filename;
  }
}
