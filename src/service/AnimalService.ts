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

/* Lógica entre o controlador e o respositório */
class AnimalService {
  /* Aceita qualquer tipo de filtro para calcular a quantidade */
  async findQtt(arg0: { animalName: any; animalType: any; personName: any; dateBegin: any; dateEnd: any; serviceName: any; }) {
      return await this.animalRepository.findQtt(arg0);
  }
  async calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName}): Promise<number> {
      return await this.animalRepository.calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName});
  }
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
      if(animal.length !== 0){ /* Se o tamanho do vetor retornado for diferente de 0 significa que já foi criado o animal */
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

  /* Calcula o custo total do animal, de acordo com seus agendamentos */
  async calcCostTotal(animals){
    var total = 0;
    for(var i = 0; i< animals.length; i++ ){
      const a = animals[i];
      const cost = await this.animalRepository.calcCostName(a.id);
      total += cost[0].sum;
      a.cost = cost[0].sum;
      
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
      if(animal.length === 0 ){  /* Se o tamanho do vetor retornado for igual a 0 significa que não foi criado o animal */
        throw new Error("Animal não cadastrado.");
      }
      
    } catch (error) {
      throw error;
    }
    return animal[0].id;
  }
}

export { AnimalService };
