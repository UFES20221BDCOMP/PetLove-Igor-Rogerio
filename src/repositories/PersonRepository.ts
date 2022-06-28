import { DataSource, Repository } from 'typeorm';
import { Person } from '../model/Person';

import { IPersonRepository, ICreatePersonDTO } from './IPersonRepository';
import { AppDataSource } from '../database';

/* Em Repository temos a interface que é conectada com o banco de dados, aqui estão definidas as querys */

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

  /* Query utilizada para buscar uma pessoa pelo nome */
  async findByName(name: string): Promise<Person> {
    const person = await this.repository.query('SELECT * FROM public."Person" as P where P.name ILIKE $1',[name]);
    return person;
  }

  /* Query utilizada para buscar uma pessoa pelo documento */
  async findByDoc(doc: string): Promise<Person[]> {
    const person = await this.repository.query('SELECT * FROM public."Person" as P where P.doc ILIKE $1',[doc]);
    console.log(person);
    return person;
  }

  /* Retorna todas as pessoas do banco de dados */
  list(): Promise<Person[]> {
    return this.repository.query('SELECT * FROM public."Person"');
  }

  delete(id: string): void{
    this.repository.delete(id);
  }
}
export { PersonRepository };
