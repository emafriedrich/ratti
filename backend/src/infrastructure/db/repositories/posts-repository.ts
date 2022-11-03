import { injectable } from 'inversify';
import { Props } from '../../../domain/entities/post';
import { connection } from '../connection';

@injectable()
export default class PostsRepository {
  async findAll(propertyType: string, propertyGroupId: number) {
    let query: string;
    let values: any[] = [];
    if (propertyType === 'all' || !propertyType) {
      query = `
        SELECT *
        FROM posts p INNER JOIN property_groups pg ON p.property_group_id = pg.id
      `;
    } else if (propertyType !== 'all' && propertyGroupId) {
      query = `
        SELECT *
        FROM posts p INNER JOIN property_groups pg ON p.property_group_id = pg.id
        WHERE type = ? AND property_group_id = ?
      `;
      values = [propertyType, propertyGroupId];
    } else {
      query = `
        SELECT *
        FROM posts p INNER JOIN property_groups pg ON p.property_group_id = pg.id
        WHERE type = ?
      `;
      values = [propertyType];
    }
    const [posts] = await connection.promise().query(query, values);
    return posts;
  }

  async findById(id: number) {
    const [posts] = await connection.promise().query(
      `
      SELECT *
      FROM posts
      WHERE id = ?
    `,
      [id]
    );
    return posts[0];
  }

  async save(dto: Props & { id?: number }) {
    const values = [
      dto.title,
      dto.description,
      dto.address,
      dto.price,
      dto.currency,
      dto.expenses || null,
      dto.expensesCurrency || null,
      dto.fitForCredit || false,
      dto.subtype || null,
      dto.latitude || null,
      dto.longitude || null,
      JSON.stringify(dto.images),
      JSON.stringify(dto.plans || []),
      dto.propertyGroupId,
    ];
    let query: string;
    if (dto.id) {
      query = `
        UPDATE posts SET title = ?
                         description = ?
                         address = ?
                         price = ?
                         currency = ?
                         expenses = ?
                         expenses_currency = ?
                         fit_for_credit = ?
                         subtype = ?
                         latitude = ?
                         longitude = ?,
                         images = ?,
                         plans = ?,
                         property_group_id = ?
        WHERE id = ?
      `;
    } else {
      query = `
        INSERT INTO posts(title, description, address, price, currency, expenses, expenses_currency, fit_for_credit, subtype, latitude, longitude, images, plans, property_group_id)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `;
    }
    await connection.promise().query(query, values);
  }
}
