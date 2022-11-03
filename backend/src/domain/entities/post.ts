import Entity from "../lib/entity";

export type Props = {
  title: string;
  description: string;
  fitForCredit: boolean;
  expenses: number;
  expensesCurrency: string;
  price: number;
  currency: string;
  latitude: number;
  longitude: number;
  address: string;
  subtype: string;
  type: 'department' | 'land';
  propertyGroupId: number;
  images: string[];
  plans: string[];
};

export default class Post extends Entity {
  constructor(id: number, props: Props) {
    super(id, props);
  }
}
