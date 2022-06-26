import { DataSource, Repository } from 'typeorm';
import { Animal } from '../model/Animal';
import { Person } from '../model/Person';
import { AppDataSource } from '../database';

import { IAnimalRepository, ICreateAnimalDTO } from './IAnimalRepository';
import { response } from 'express';

class AnimalRepository implements IAnimalRepository {
  private repository: Repository<Animal>;

  constructor() {
    this.repository = AppDataSource.getRepository(Animal);

  }

  async findByName(name: string): Promise<Animal[]> {
    const animals = await this.repository.query('SELECT * FROM public."Animal" as animal where animal.name ILIKE $1',[name]);
    return animals;
  }

  async findByOwner(person: Person): Promise<Animal[]> {
    return await this.repository.query('SELECT * FROM (public."Animal" as A natural join public."Person" as P) where P.name ILIKE $person.name',[person.name])
  }

  async create({
    name,
    cost,
    owner,
    type,
    id,
  }: ICreateAnimalDTO) {
    const animals = await this.repository.create({name,cost,owner,type});
    
    await this.repository.save(animals);
  }

  async list(): Promise<Animal[]> {
    const animals = await this.repository.query('SELECT * FROM public."Animal"');
    console.log(animals);
    return animals;
  }
}
export { AnimalRepository };
