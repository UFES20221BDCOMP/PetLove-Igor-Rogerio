import { CreateAnimalController } from "./AnimalController"
import { AnimalService } from "../service/AnimalService" 
import { AnimalRepository } from "../repositories/AnimalRepository"

export default():CreateAnimalController=>{
    const animalRepository = new AnimalRepository();
    const animalService = new AnimalService(animalRepository);
    const createAnimalController = new CreateAnimalController(animalService);

    return createAnimalController;
}