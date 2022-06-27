import { Request, Response } from 'express';
import { Animal } from 'model/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';

import { AnimalService } from "../service/AnimalService";

class AnimalController {
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
    findByName(name: string): Promise<Animal[]>{
        console.log("body", name);
        return this.animalService.findByName(name);
    }
    async findAnimalOwner(name: string, owner: string): Promise<string>{
        return await this.animalService.findByAnimalOwner(name, owner);
    }
}
export {AnimalController}