import { injectable } from "inversify";
import PostsRepository from "../../db/repositories/posts-repository";

@injectable()
export default class GetPost {

  constructor(private repo: PostsRepository) { }

  async execute(id: number): Promise<any[]> {
    const posts = await this.repo.findById(id);
    return posts as any[];
  }
}
