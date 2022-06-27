import { Animal } from '../model/Animal';
import { Person } from '../model/Person';

interface ICreateAnimalDTO {
  name: string;
  type: string;
  owner: string;
  cost: number;
  id?: string;
}

interface IAnimalRepository {
  findByName(name: string): Promise<Animal[]>;
  findByOwner(person: Person): Promise<Animal[]>;
  findByOwnerName(person: string,name: string): Promise<Animal[]>;
  list(): Promise<Animal[]>;
  create({
    name,
    cost,
    type,
    owner,
    id,
  }: ICreateAnimalDTO)
  findByAnimalOwner(name: string, owner: string) : Promise<Animal[]>;
}
export { IAnimalRepository, ICreateAnimalDTO };
