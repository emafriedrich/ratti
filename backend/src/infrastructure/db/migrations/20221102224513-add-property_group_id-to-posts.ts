import Migration from "./lib/migration"

export default class AddPropertyGroupIdToPosts extends Migration {

  constructor(connection) {
    super(connection);
  }

  up(): Promise<any> {
    return this.connection.promise().query(`
      ALTER TABLE posts ADD COLUMN property_group_id bigint unsigned REFERENCES property_groups(id);
    `);
  }


  filename() {
    return __filename;
  }
}
