import { Person } from '../model/Person';

interface ICreatePersonDTO {
  name: string;
  doc: string;
  birthDate: Date;
  id?: string;
}

interface IPersonRepository {
  findByName(name: string): Person;
  findByDoc(doc: string);
  list(): Person[];
  create({
    name, doc, birthDate, id,
  }: ICreatePersonDTO): void;
}
export { IPersonRepository, ICreatePersonDTO };
