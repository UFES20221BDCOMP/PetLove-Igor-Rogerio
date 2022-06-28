import { Request, Response } from 'express';
import { Schedule } from 'model/Schedule';
import  AnimalController  from './IndexAnimal';

import { ScheduleService } from "../service/ScheduleService";
import ServiceController  from './IndexService';

/* Onde os requests são mapeados */
class ScheduleController {
    delete(name: string): void {
        this.scheduleService.delete(name);
    }
    constructor(private scheduleService:ScheduleService){
    }
    async handle(request: Request, response: Response): Promise<Response>{

        const { service, date, animal, owner} = request.body;
        const serviceId = await ServiceController().findService(service);
        const animalId = await AnimalController().findAnimalOwner(animal, owner);

        await this.scheduleService.create({serviceId, date, animalId, owner});
        return response.status(201).send();
    }
    async list(request, response): Promise<Schedule[]>{
        return await this.scheduleService.list(request);
    }
}
export {ScheduleController}