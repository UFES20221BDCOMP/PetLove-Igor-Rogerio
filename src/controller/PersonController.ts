import { Request, Response } from 'express';
import { Person } from 'model/Person';
import { PersonRepository } from '../repositories/PersonRepository';

import { PersonService } from "../service/PersonService";

/* Onde os requests são mapeados */
class PersonController {
    delete(name: string): void {
        this.personService.delete(name);
    }
    constructor(private personService:PersonService){
    }
    handle(request: Request, response: Response): Response{
        const { name, doc, birthDate} = request.body;
        this.personService.create({ name, doc, birthDate});

        return response.status(201).send();
    }
    list(): Promise<Person[]>{
        return this.personService.list();
    }
}
export {PersonController}