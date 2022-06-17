import { AnimalRepository } from '../repositories/AnimalRepository';
import { IAnimalRepository, ICreateAnimalDTO } from '../repositories/IAnimalRepository';

interface IRequest {
  name: string;
  cost: number;
  owner: string;
  type: string;
}

class CreateAnimalService {
  constructor(private personRepository: IAnimalRepository) { }
  execute({
    name, cost, owner, type,
  }: IRequest): void {
    this.personRepository.create({
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
}

export { CreateAnimalService };
