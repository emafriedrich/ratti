import { injectable } from "inversify";
import PostsRepository from "../../db/repositories/posts-repository";

@injectable()
export default class GetPosts {

  constructor(private repo: PostsRepository) { }

  async execute(propertyType: string, propertyGroupId: number): Promise<any[]> {
    const posts = await this.repo.findAll(propertyType, propertyGroupId);
    return posts as any[];
  }
}
