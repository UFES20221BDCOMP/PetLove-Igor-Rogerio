import { PersonController } from "./PersonController"
import { PersonService } from "../service/PersonService" 
import { PersonRepository } from "../repositories/PersonRepository"

/* Utilizamos o index para criar o controlador só a partir do momento que a rota for chamada */

export default():PersonController=>{
    const personRepository = new PersonRepository();
    const personService = new PersonService(personRepository);
    const createPersonController = new PersonController(personService);

    return createPersonController;
}