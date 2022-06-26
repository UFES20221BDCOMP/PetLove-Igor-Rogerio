import { Animal } from 'model/Animal';
import { Person } from 'model/Person';
import { AnimalRepository } from '../repositories/AnimalRepository';
import { IAnimalRepository, ICreateAnimalDTO } from '../repositories/IAnimalRepository';

interface IRequest {
  name: string;
  cost: number;
  owner: Person;
  type: string;
}

class AnimalService {
  constructor(private animalRepository: IAnimalRepository) { }
  create({
    name, cost, owner, type,
  }: IRequest): void {
    this.animalRepository.create({
      name,
      cost,
      owner,
      type,
    });
    console.log({
      name,
      cost,
      owner,
      type,
    });
  }

  list():Promise<Animal[]>{
    return this.animalRepository.list();
  }
}

export { AnimalService };
