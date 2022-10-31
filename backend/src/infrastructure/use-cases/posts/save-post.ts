import { injectable } from "inversify";
import PostsRepository from "../../db/repositories/posts-repository";

@injectable()
export default class SavePost {

  constructor(private repo: PostsRepository) { }

  async execute(data: any): Promise<any[]> {
    await this.repo.save(data);
    return {} as any;
  }
}
