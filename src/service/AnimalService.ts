import { Animal } from 'model/Animal';
import { Person } from 'model/Person';
import { AnimalRepository } from '../repositories/AnimalRepository';
import { IAnimalRepository, ICreateAnimalDTO } from '../repositories/IAnimalRepository';

interface IRequest {
  name: string;
  cost: number;
  owner: string;
  type: string;
}

class AnimalService {
  delete(id: string) {
      this.animalRepository.delete(id);
  }
  constructor(private animalRepository: IAnimalRepository) { }
  
  async create({
    name, cost, owner, type,
  }: IRequest){
    const animal = await this.animalRepository.findByOwnerName(owner,name);

    
    try {
      if(animal.length !== 0){
        throw new Error("O dono ja possui um animal com esse nome.")
      }
      this.animalRepository.create({
        name,
        cost,
        owner,
        type,
      });
    } catch (error) {
      console.log(error);
      
    }

  }

  list():Promise<Animal[]>{
    return this.animalRepository.list();
  }

  findByName(name){
    return this.animalRepository.findByName(name);
  }

  async findByAnimalOwner(name, owner): Promise<string>{
    const animal = await this.animalRepository.findByAnimalOwner(name, owner);
    try {
      if(animal.length === 0 ){
        throw new Error("Animal não cadastrado.");
      }
      
    } catch (error) {
      throw error;
    }
    return animal[0].id;
  }
}

export { AnimalService };
