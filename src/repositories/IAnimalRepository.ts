import { Animal } from '../model/Animal';
import { Person } from '../model/Person';

interface ICreateAnimalDTO {
  name: string;
  type: string;
  owner: Person;
  cost: number;
  id?: string;
}

interface IAnimalRepository {
  findByName(name: string): Promise<Animal[]>;
  findByOwner(person: Person): Promise<Animal[]>;
  list(): Promise<Animal[]>;
  create({
    name,
    cost,
    type,
    owner,
    id,
  }: ICreateAnimalDTO)

}
export { IAnimalRepository, ICreateAnimalDTO };
