import { injectable } from "inversify";
import { OkPacket, RowDataPacket } from "mysql2";
import { Props as ExtraProps } from "../../../domain/entities/extra";
import { Props as ExtraGroupProps } from "../../../domain/entities/extra-group";
import { connection } from "../connection";

@injectable()
export default class ExtrasRepository {

  async saveExtra(dto: ExtraProps & { id?: number }) {
    const values = [dto.name, dto.value_type, JSON.stringify(dto.posibleValues), dto.extra_group_id];
    if (dto.id) {
      await connection.promise().query(`
        UPDATE extras SET name = ?,
                      value_type = ?,
                      posible_values = ?
                      type = ?
                      extra_group_id = ?
          WHERE id = ?
      `, [...values, dto.id])
    } else {
      const [result] = await connection.promise().query(`
      INSERT INTO extras(name, value_type, posible_values, extra_group_id)
        VALUES(?, ?, ?, ?);
    `, values);
      dto.id = (result as OkPacket).insertId;
    }

    return connection.promise().query(`
      SELECT *
      FROM extras
      WHERE id = ?
    `, [dto.id]);
  }

  async saveExtraGroup(dto: ExtraGroupProps & { id?: number }) {
    const values = [dto.title, dto.description, dto.type];
    if (dto.id) {
      await connection.promise().query(`
        UPDATE extra_groups(title, description)
          VALUES(?, ?, ?)
          WHERE id = ?
      `, [...values, dto.id]);
    } else {
      const [result] = await connection.promise().query(`
      INSERT INTO extra_groups(title, description, type)
        VALUES(?, ?);
    `, values);
      dto.id = (result as OkPacket).insertId;
    }

    return connection.promise().query(`
      SELECT *
      FROM extra_groups
      WHERE id = ?
    `, [dto.id]);
  }

  async getAll() {
    const [extraGroups] = await connection.promise().query(`
      SELECT *
      FROM extra_groups
    `);

    for (const fg of (extraGroups as RowDataPacket[])) {
      const [extras] = await connection.promise().query(`
        SELECT *
        FROM extras
        WHERE extra_group_id = ?
      `, [fg.id]);
      fg.extras = extras;
    }
    return extraGroups as RowDataPacket[];
  }
}
