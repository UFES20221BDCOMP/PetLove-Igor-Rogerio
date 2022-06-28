import { Animal } from '../model/Animal';
import { Person } from '../model/Person';

interface ICreateAnimalDTO {
  name: string;
  type: string;
  owner: string;
  id?: string;
}

interface IAnimalRepository {
  findQtt(arg0: { animalName: any; animalType: any; personName: any; dateBegin: any; dateEnd: any; serviceName: any; });
  calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName}): Promise<number>;
  findByType(type: string):Promise<Animal[]>;
  calcCostName(name: string): Promise<number>;
  findByName(name: string): Promise<Animal[]>;
  findByOwner(person: Person): Promise<Animal[]>;
  findByOwnerName(person: string,name: string): Promise<Animal[]>;
  list(): Promise<Animal[]>;
  create({
    name,
    type,
    owner,
    id,
  }: ICreateAnimalDTO)
  findByAnimalOwner(name: string, owner: string) : Promise<Animal[]>;
  delete(id: string): void;
}
export { IAnimalRepository, ICreateAnimalDTO };
