import { injectable } from 'inversify';
import { connection } from '../connection';

@injectable()
export class PropertyGroupRepository {
  async save(data: { type: string; name: string; id?: number }) {
    if (data.id) {
      await connection.promise().query(
        `
        UPDATE property_groups SET type = ?, name = ? WHERE id = ?
    `,
        [data.type, data.name, data.id]
      );
    } else {
      await connection.promise().query(
        `
        INSERT INTO property_groups(type, name) VALUES(?, ?)
      `,
        [data.type, data.name]
      );
    }
  }

  async getAll() {
    const [propertyGroups] = await connection.promise().query(`
      SELECT *
      FROM property_groups
      ORDER BY id
    `);

    return propertyGroups;
  }
}
