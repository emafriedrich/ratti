interface Props {
  [index: string]: any;
}

export default class Entity<T = number> {

  public props: Props;

  constructor(public readonly id: T, props: Props) {
    this.props = props;
  }

}
