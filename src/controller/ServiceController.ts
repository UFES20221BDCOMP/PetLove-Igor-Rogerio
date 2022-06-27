import { Request, Response } from 'express';
import { Service } from 'model/Service';
import { ServiceRepository } from '../repositories/ServiceRepository';

import { ServiceService } from "../service/ServiceService";

class ServiceController {
    delete(name: string): void {
        this.serviceService.delete(name);
    }
    constructor(private serviceService:ServiceService){
    }
    handle(request: Request, response: Response): Response{
        console.log("Controller");
        
        const { name, value} = request.body;
        this.serviceService.create({name, value});

        return response.status(201).send();
    }
    list(): Promise<Service[]>{
        return this.serviceService.list();
    }
    async findService(name: string): Promise<string>{
        const service = await this.serviceService.findId(name);
        console.log('To aqui:', service);
        return service;
    }
}
export {ServiceController}