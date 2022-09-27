import { injectable } from "inversify";
import FeatureGroup from "../../../domain/entities/feature-group";
import FeatureGroupRepository from "../../db/repositories/feature-groups-repository";

@injectable()
export default class GetAllFeatures {

  constructor(private repo: FeatureGroupRepository) { }

  async execute(): Promise<FeatureGroup[]> {
    const fgs = await this.repo.getAll();
    const featureGroups = fgs.map(fg => {
      return new FeatureGroup(fg.id, {
        features: fg.features,
        title: fg.title,
        description: fg.description,
        featureValueType: fg.feature_value_type,
      });
    });
    return featureGroups;
  }
}
