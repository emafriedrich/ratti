import Entity from "../lib/entity";

export type Props = {
  title: string;
  description: string | null;
  type: 'checkboxes' | 'another';
  extras?: any[];
};

export default class ExtraGroup extends Entity {

  constructor(id: number, props: Props) {
    super(id, props);
  }
}
