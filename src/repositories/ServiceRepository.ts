import { Person } from '../model/Person';
import { Service } from '../model/Service';
import { IServiceRepository, ICreateServiceDTO } from './IServiceRepository';

class ServiceRepository implements IServiceRepository {
  private services: Service[];

  constructor() {
    this.services = [];
  }

  findByName(name: string): Service {
    return null;
  }

  create({
    name,
    value,
    id,
  }: ICreateServiceDTO) {
    const service = new Service();
    Object.assign(service, {
      name,
      value,
      id,
    });

    this.services.push(service);
  }

  list(): Service[] {
    return this.services;
  }
}
export { ServiceRepository };
