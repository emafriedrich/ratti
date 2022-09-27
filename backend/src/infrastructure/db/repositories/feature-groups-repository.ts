import { injectable } from "inversify";
import { OkPacket, RowDataPacket } from "mysql2";
import { Props } from "../../../domain/entities/feature-group";
import { connection } from "../connection";

@injectable()
export default class FeatureGroupRepository {

  async save(dto: Props & { id?: number }) {
    const values = [dto.title, dto.description, dto.featureValueType];
    if (dto.id) {
      await connection.promise().query(`
        UPDATE feature_groups(title, description, feature_value_type)
          VALUES(?, ?, ?)
      `, values)
    } else {
      const [result] = await connection.promise().query(`
      INSERT INTO feature_groups(title, description, feature_value_type)
        VALUES(?, ?, ?);
    `, values);
      dto.id = (result as OkPacket).insertId;
    }

    return connection.promise().query(`
      SELECT *
      FROM feature_groups
      WHERE id = ?
    `, [dto.id]);
  }

  async getAll() {
    const [featureGroups] = await connection.promise().query(`
      SELECT *
      FROM feature_groups
    `);

    for (const fg of (featureGroups as RowDataPacket[])) {
      const [features] = await connection.promise().query(`
        SELECT *
        FROM features
        WHERE feature_group_id = ?
      `, [fg.id]);
      fg.features = features;
    }
    return featureGroups as RowDataPacket[];
  }
}
