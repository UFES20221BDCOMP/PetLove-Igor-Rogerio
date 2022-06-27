import { Service } from 'model/Service';
import { IServiceRepository, ICreateServiceDTO } from '../repositories/IServiceRepository';
import { ServiceRepository } from '../repositories/ServiceRepository';

interface IRequest {
  name: string;
  value: number;
  id?: string;
}

class ServiceService {
  constructor(private serviceRepository: IServiceRepository) { }

  async create({ name, value }: IRequest) {
    const serviceAlreadyExists = await this.serviceRepository.findByName(name);
    try {
      if(serviceAlreadyExists.length == 0) {
        console.log('Agora to aqui');
        this.serviceRepository.create({ name, value });
      }
      throw new Error('Service already exists');
    }
    catch{
      console.log('Service already exists');
    }
  }

  list(): Promise<Service[]>{
    return this.serviceRepository.list();
  }

  async findId(name: string): Promise<string>{
    const service = await this.serviceRepository.findByName(name);
    try {
      if(service.length === 0 ){
        throw new Error("Serviço não cadastrado.");
      }
      
    } catch (error) {
      throw error;
    }
    return service[0].id;
  }
}

export { ServiceService };