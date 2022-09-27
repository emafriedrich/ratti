import FeatureGroup from "../../../domain/entities/feature-group";

export default class AllFeaturesSerializer {

  constructor(private features: FeatureGroup[]) {}

  serialize() {
    return this.features.map(f => {
      return {
        id: f.id,
        ...f.props,
      }
    })
  }
}
