import Entity from "../lib/entity";

export type Props = {
  name: string;
  value_type: 'checkbox' | 'select' | 'text';
  extra_group_id: number;
  posibleValues?: any[];
};

export default class Extra extends Entity {

  constructor(id: number, props: Props) {
    super(id, props);
  }
}
