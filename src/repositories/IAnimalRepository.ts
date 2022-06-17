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
  findByName(name: string): Animal;
  findByOwner(person: Person): Animal[];
  list(): Animal[];
  create({
    name,
    cost,
    type,
    owner,
    id,
  }: ICreateAnimalDTO)

}
export { IAnimalRepository, ICreateAnimalDTO };
