import { Request, Response } from 'express';
import { Animal } from 'model/Animal';

import { AnimalService } from "../service/AnimalService";

class AnimalController {
    async findOwners(type: string) {
        const animals = this.findByType(type);
        const owners= [];
        for(var i = 0;i < (await animals).length; i++){
            owners[i]=animals[i].doc;
        }

    }
    delete(name: string) {
      this.animalService.delete(name);
    }
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
        return this.animalService.findByName(name);
    }
    async findAnimalOwner(name: string, owner: string): Promise<string>{
        return await this.animalService.findByAnimalOwner(name, owner);
    }
    async findByType(type:string): Promise<Animal[]>{
        return await this.animalService.findByType(type);
    }

    async calcMedia(animals:Promise<Animal[]>): Promise<number>{
        var total = 0;
        
        for(var i = 0;i < (await animals).length; i++){
            total+=animals[i].cost;
        }
        
        return total/(await animals).length;
    }
}
export {AnimalController}