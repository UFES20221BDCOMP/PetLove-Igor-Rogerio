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
  async findByType(type:string): Promise<Animal[]>{

      const animals = await this.animalRepository.findByType(type);
      await this.calcCostTotal(animals);
      return animals;
  }
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
        owner,
        type,
      });
    } catch (error) {
      console.log(error);
      
    }

  }

  async list():Promise<Animal[]>{
    const animals = await this.animalRepository.list();
    
    const total = await this.calcCostTotal(animals);
    return animals;
  }

  async calcCostTotal(animals){
    var total = 0;
    for(var i = 0; i< animals.length; i++ ){
      const a = animals[i];
      const cost = await this.animalRepository.calcCostName(a.id);
      total += cost[0].sum;
      a.cost = cost[0].sum;
      console.log("Animal depois",a);
      
    }
    return total;
  }

  async findByName(name){
    const animal = await this.animalRepository.findByName(name);
    if(animal.length !==0 ){
      await animal.forEach(async (a) => {
        a.cost = await this.animalRepository.calcCostName(a.id);
      });

    }
    console.log(animal);
    
    return animal;
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
