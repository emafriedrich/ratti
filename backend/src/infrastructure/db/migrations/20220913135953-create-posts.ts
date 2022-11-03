import Migration from "./lib/migration"

export default class CreatePublication extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      
      CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        address VARCHAR(500) NOT NULL,
        latitude DECIMAL(11, 8),
        longitude DECIMAL(11, 8),
        price DECIMAL(20, 4) NOT NULL,
        currency VARCHAR(10) NOT NULL,
        expenses DECIMAL(20, 4),
        expenses_currency VARCHAR(10),
        fit_for_credit BOOLEAN NOT NULL DEFAULT true,
        title VARCHAR(300) NOT NULL,
        description TEXT NOT NULL,
        images JSON,
        plans JSON
      )
    `);
  }


  filename() {
    return __filename;
  }
}
