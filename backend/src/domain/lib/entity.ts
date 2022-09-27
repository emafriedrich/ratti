interface Props {
  [index: string]: any;
}

export default class Entity {

  public props: Props;

  constructor(public readonly id: number, props: Props) {
    this.props = props;
  }

}
