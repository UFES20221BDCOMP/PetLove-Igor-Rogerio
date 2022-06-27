import { DataSource, Repository } from 'typeorm';
import { Person } from '../model/Person';

import { IPersonRepository, ICreatePersonDTO } from './IPersonRepository';
import { AppDataSource } from '../database';

class PersonRepository implements IPersonRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository = AppDataSource.getRepository(Person);
  }

  async create({
    name, doc, birthDate, id,
  }: ICreatePersonDTO) {
    const myDate = new Date(birthDate);
    const person = await this.repository.create({name, doc, birthDate});

    await this.repository.save(person);
  }

  async findByName(name: string): Promise<Person> {
    const person = await this.repository.query('SELECT * FROM public."Person" as P where P.name ILIKE $1',[name]);
    return person;
  }

  async findByDoc(doc: string): Promise<Person[]> {
    const person = await this.repository.query('SELECT * FROM public."Person" as P where P.doc ILIKE $1',[doc]);
    console.log(person);
    return person;
  }

  list(): Promise<Person[]> {
    return this.repository.query('SELECT * FROM public."Person"');
  }
}
export { PersonRepository };
