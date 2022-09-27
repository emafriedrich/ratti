import { injectable } from "inversify";
import { OkPacket } from "mysql2";
import { Props } from "../../../domain/entities/feature";
import { connection } from "../connection";

@injectable()
export default class Featurepository {

  async save(dto: Props & { id?: number }) {
    const values = [
      dto.name,
      !!dto.optional,
      dto.maxValue || null,
      dto.minValue || null,
      dto.valueSufix || null,
      !!dto.additionalValue,
      JSON.stringify(dto.posibleValues || null),
      dto.featureGroupId,
    ];
    if (dto.id) {
      await connection.promise().query(`
        UPDATE features set name = ?,
                        optional = ?,
                        max_value = ?,
                        min_value = ?,
                        value_sufix = ?,
                        additional_value = ?,
                        posible_values ?,
                        feature_group_id = ?
        WHERE id = ?
      `, [...values, dto.id]);
    } else {
      const [result] = await connection.promise().query(`
      INSERT INTO features(name, optional, max_value, min_value, value_sufix, additional_value, posible_values, feature_group_id)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);
    `, values);
      dto.id = (result as OkPacket).insertId;
    }

    return connection.promise().query(`
      SELECT *
      FROM features
      WHERE id = ?
    `, [dto.id]);
  }

  async getAllFeatures() {}
}
