import { PersonController } from "./PersonController"
import { PersonService } from "../service/PersonService" 
import { PersonRepository } from "../repositories/PersonRepository"

export default():PersonController=>{
    const personRepository = new PersonRepository();
    const personService = new PersonService(personRepository);
    const createPersonController = new PersonController(personService);

    return createPersonController;
}