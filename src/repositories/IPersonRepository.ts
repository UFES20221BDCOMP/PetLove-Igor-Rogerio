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

}
export { IPersonRepository, ICreatePersonDTO };
