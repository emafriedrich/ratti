import { injectable } from "inversify";
import PostsRepository from "../../db/repositories/posts-repository";

@injectable()
export default class GetPosts {

  constructor(private repo: PostsRepository) { }

  async execute(): Promise<any[]> {
    const posts = await this.repo.findAll();
    return posts as any[];
  }
}
