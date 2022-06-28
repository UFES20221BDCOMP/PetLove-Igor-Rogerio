import { Service } from 'model/Service';
import { IServiceRepository, ICreateServiceDTO } from '../repositories/IServiceRepository';
import { ServiceRepository } from '../repositories/ServiceRepository';

interface IRequest {
  name: string;
  value: number;
  id?: string;
}

/* Lógica entre o controlador e o respositório */
class ServiceService {
  constructor(private serviceRepository: IServiceRepository) { }
  delete(id: string) {
    this.serviceRepository.delete(id);
  }
  async create({ name, value }: IRequest) {
    const serviceAlreadyExists = await this.serviceRepository.findByName(name);
    try {
      if(serviceAlreadyExists.length == 0) {  /* Verifica se o serviço ja existe no banco */
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
      if(service.length === 0 ){ /* Verifica se o serviço ja existe no banco */
        throw new Error("Serviço não cadastrado.");
      }
      
    } catch (error) {
      throw error;
    }
    return service[0].id;
  }
}

export { ServiceService };