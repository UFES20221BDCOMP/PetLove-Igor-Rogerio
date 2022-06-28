import { Request, Response } from 'express';
import { Animal } from 'model/Animal';

import { AnimalService } from "../service/AnimalService";

/* Onde os requests são mapeados */
class AnimalController {
    async findQtt(arg0: { animalName: any; animalType: any; personName: any; dateBegin: any; dateEnd: any; serviceName: any; }) {
        return await this.animalService.findQtt(arg0);
    }
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

    async calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName}): Promise<number>{
        return this.animalService.calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName});
    }
}
export {AnimalController}