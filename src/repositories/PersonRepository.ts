import { Person } from '../model/Person';
import { IPersonRepository, ICreatePersonDTO } from './IPersonRepository';

class PersonRepository implements IPersonRepository {
  private persons: Person[];

  constructor() {
    this.persons = [];
  }

  create({
    name, doc, birthDate, id,
  }: ICreatePersonDTO): void {
    const person = new Person();

    Object.assign(person, {
      name, doc, birthDate,
    });

    this.persons.push(person);
  }

  findByName(name): Person {
    // TODO
    return null;
  }

  findByDoc(): Person {
    return null;
  }

  list(): Person[] {
    return this.persons;
  }
}
export { PersonRepository };
