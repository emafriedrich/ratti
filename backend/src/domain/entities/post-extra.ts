import Entity from "../lib/entity";

export type Props = {
  value: number;
};

type Id = {
  postId: number;
  extraId: number;
};

export default class PostExtra extends Entity<Id> {

  constructor(id: Id, props: Props) {
    super(id, props);
  }
}
