import { Animal } from '../model/Animal';
import { Person } from '../model/Person';
import { IAnimalRepository, ICreateAnimalDTO } from './IAnimalRepository';

class AnimalRepository implements IAnimalRepository {
  private animals: Animal[];

  constructor() {
    this.animals = [];
  }

  findByName(name: string): Animal {
    return null;
  }

  findByOwner(person: Person): Animal[] {
    return null;
  }

  create({
    name,
    cost,
    owner,
    type,
    id,
  }: ICreateAnimalDTO) {
    const animal = new Animal();
    Object.assign(animal, {
      name,
      cost,
      owner,
      type,
    });

    this.animals.push(animal);
  }

  list(): Promise<Animal[]> {
    return null;
  }
}
export { AnimalRepository };
