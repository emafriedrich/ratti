import mysql2 from 'mysql2';

export default abstract class Migration {
  connection: mysql2.Connection;

  constructor(connection: mysql2.Connection) {
    this.connection = connection;
  }

  abstract filename(): string;

  abstract up(): Promise<any>;

  down() {
    throw new Error('Should be implemented');
  }
}
