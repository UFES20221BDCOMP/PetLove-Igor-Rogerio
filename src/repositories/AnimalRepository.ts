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

  findByName(name: string): Animal {
    return null;
  }

  findByOwner(person: Person): Animal[] {
    return null;
  }

  async create({
    name,
    cost,
    owner,
    type,
    id,
  }: ICreateAnimalDTO) {
    console.log("Comecei");
    const animals = await this.repository.create({name,cost,owner,type});
    console.log("To aqui");
    console.log(animals);
    console.log("Passei");
    await this.repository.save(animals);
  }

  async list(): Promise<Animal[]> {
    const animals = await this.repository.query('SELECT * FROM public."Animal"');
    return animals;
  }
}
export { AnimalRepository };
