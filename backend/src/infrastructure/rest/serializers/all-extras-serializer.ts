import ExtraGroup from "../../../domain/entities/extra-group";

export default class AllExtrasSerializer {

  constructor(private extraGroups: ExtraGroup[]) {}

  serialize() {
    return this.extraGroups.map(f => {
      return {
        id: f.id,
        ...f.props,
      }
    })
  }
}
