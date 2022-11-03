import { injectable } from "inversify";
import { PropertyGroupRepository } from "../../db/repositories/property-group-repository";

@injectable()
export default class GetAllPropertyGroups {

  constructor(private repo: PropertyGroupRepository) { }

  async execute(): Promise<any[]> {
    const propertyGroups = await this.repo.getAll();
    return propertyGroups as any[];
  }
}
