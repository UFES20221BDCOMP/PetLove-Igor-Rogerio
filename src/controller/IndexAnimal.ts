import { AnimalController } from "./AnimalController"
import { AnimalService } from "../service/AnimalService" 
import { AnimalRepository } from "../repositories/AnimalRepository"

/* Utilizamos o index para criar o controlador só a partir do momento que a rota for chamada */

export default():AnimalController=>{
    const animalRepository = new AnimalRepository();
    const animalService = new AnimalService(animalRepository);
    const createAnimalController = new AnimalController(animalService);

    return createAnimalController;
}