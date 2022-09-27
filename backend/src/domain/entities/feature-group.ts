import Entity from "../lib/entity";

export type Props = {
  title: string;
  description: string | null;
  featureValueType: 'number' | 'select';
  features?: any[];
};

export default class FeatureGroup extends Entity {

  constructor(id: number, public props: Props) {
    super(id, props);
  }
}
