import { injectable } from "inversify";
import ExtraGroup from "../../../domain/entities/extra-group";
import ExtrasRepository from "../../db/repositories/extras-repository";

@injectable()
export default class GetAllExtras {

  constructor(private repo: ExtrasRepository) { }

  async execute(): Promise<ExtraGroup[]> {
    const eg = await this.repo.getAll();
    const extraGroups = eg.map(fg => {
      return new ExtraGroup(fg.id, {
        extras: fg.extras,
        title: fg.title,
        type: fg.type,
        description: fg.description,
      });
    });
    return extraGroups;
  }
}
