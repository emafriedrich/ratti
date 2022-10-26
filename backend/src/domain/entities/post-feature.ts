import Entity from "../lib/entity";

export type Props = {
  value: number;
  additionalValue: number;
};

type Id = {
  postId: number;
  featureId: number;
}

export default class PostFeature extends Entity<Id> {

  constructor(id: Id, props: Props) {
    super(id, props);
  }
}
