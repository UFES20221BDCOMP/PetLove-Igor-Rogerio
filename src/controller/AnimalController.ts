import { Request, Response } from 'express';
import { Animal } from 'model/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';

import { AnimalService } from "../service/AnimalService";

class AnimalController {
    animalService: AnimalService;
    animalRepository: AnimalRepository;
    constructor(){
        this.animalRepository = new AnimalRepository();
        this.animalService = new AnimalService(this.animalRepository);
    }
    create(request: Request, response: Response): Response{
        const { name, cost, type, owner} = request.body;
        
        this.animalService.create({name, cost, type, owner});

        return response.status(201).send();
    }
    list(): Promise<Animal[]>{
        return this.animalService.list();
    }
}

export {AnimalController}