import { Container } from "inversify";
import ExtrasRepository from "../infrastructure/db/repositories/extras-repository";


export const container = new Container({
  autoBindInjectable: true,
});

container.bind(ExtrasRepository).toSelf().inSingletonScope();

