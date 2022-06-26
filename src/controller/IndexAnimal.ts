import { AnimalController } from "./AnimalController"
import { AnimalService } from "../service/AnimalService" 
import { AnimalRepository } from "../repositories/AnimalRepository"

export default():AnimalController=>{
    const animalRepository = new AnimalRepository();
    const animalService = new AnimalService(animalRepository);
    const createAnimalController = new AnimalController(animalService);

    return createAnimalController;
}