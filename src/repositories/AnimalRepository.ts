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
    return await this.repository.query('SELECT * FROM (public."Animal" as A natural join public."Person" as P) where P.name ILIKE $1',[person.name])
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

    return animals;
  }

  async findByOwnerName(person: string, name: string): Promise<Animal[]>{
    console.log(person);
    const animal = await this.repository.query('SELECT * FROM public."Animal" as A where'
                                      + ' A.name ILIKE $1 and A."ownerDoc" = $2',[name,person]);
    console.log(animal);
                                      
    return animal;
  }

  async findByAnimalOwner(name: string, owner: string): Promise<Animal[]>{
    const animal = await this.repository.query('SELECT * FROM public."Animal" as A where'
                                      + ' A.name ILIKE $1 and A."ownerDoc" = $2',[name, owner]);
    console.log(animal);
    return animal;
  }

  delete(id: string): void{
    this.repository.delete(id);
  }
}
export { AnimalRepository };
