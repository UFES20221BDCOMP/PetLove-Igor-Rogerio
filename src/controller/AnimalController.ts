import { Request, Response } from 'express';
import { Animal } from 'model/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';

import { AnimalService } from "../service/AnimalService";

class CreateAnimalController {
    constructor(private animalService:AnimalService){
    }
    handle(request: Request, response: Response): Response{
        const { name, cost, type, owner} = request.body;
        this.animalService.create({name, cost, type, owner});

        return response.status(201).send();
    }
    list(): Promise<Animal[]>{
        return this.animalService.list();
    }
}

class ListAnimalController {
    constructor(private animalService:AnimalService){
    }
    handle(): Promise<Animal[]>{
        return this.animalService.list();
    }
}
export {CreateAnimalController,ListAnimalController}