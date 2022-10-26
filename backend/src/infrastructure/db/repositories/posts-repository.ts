import { injectable } from "inversify";
import { Props } from "../../../domain/entities/post";
import { connection } from "../connection";

@injectable()
export default class PostsRepository {

  async findAll() {
    const [posts] = await connection.promise().query(`
      SELECT *
      FROM posts
    `);
    return posts;
  }

  async findById(id: number) {
    const [posts] = await connection.promise().query(`
      SELECT *
      FROM posts
      WHERE id = ?
    `, [id]);
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
      dto.fitForCredit,
      dto.type,
      dto.subtype || null,
      dto.latitude || null,
      dto.longitude || null,
      JSON.stringify(dto.images),
      JSON.stringify(dto.plans || []),
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
                         type = ?
                         subtype = ?
                         latitude = ?
                         longitude = ?,
                         images = ?,
                         plans = ?
        WHERE id = ?
      `;
    } else {
      query = `
        INSERT INTO posts(title, description, address, price, currency, expenses, expenses_currency, fit_for_credit, type, subtype, latitude, longitude, images, plans)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `
    }
    await connection.promise().query(query, values);
  }
}