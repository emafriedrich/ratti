import Entity from "../lib/entity";

export type Props = {
  name: string;
  optional: boolean;
  maxValue?: number;
  minValue?: number;
  valueSufix?: string;
  additionalValue: boolean;
  featureGroupId: number;
  posibleValues?: any[];
}

export default class Feature extends Entity {
  constructor(id: number, props: Props) {
    super(id, props);
  }
}
