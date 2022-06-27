import { Person } from '../model/Person';

interface ICreatePersonDTO {
  name: string;
  doc: string;
  birthDate: string;
  id?: string;
}

interface IPersonRepository {
  findByName(name: string): Promise<Person>;
  findByDoc(doc: string): Promise<Person[]>;
  list(): Promise<Person[]>;
  create({
    name, doc, birthDate, id,
  }: ICreatePersonDTO): void;
}
export { IPersonRepository, ICreatePersonDTO };
