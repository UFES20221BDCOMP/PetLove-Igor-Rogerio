import { DataSource, Repository } from 'typeorm';
import { Service } from '../model/Service';
import { AppDataSource } from '../database';
import { IServiceRepository, ICreateServiceDTO } from './IServiceRepository';
import { response } from 'express';

class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = AppDataSource.getRepository(Service);
  }

  async findByName(name: string): Promise<Service[]> {
    const services = await this.repository.query('SELECT * FROM public."Service" as S where S.name ILIKE $1',[name]);
    return services;
  }

  create({
    name,
    value,
    id,
  }: ICreateServiceDTO) {
    const service = this.repository.create({name,value});
    this.repository.save(service);
  }

  async list(): Promise<Service[]> {
    return await this.repository.query('SELECT * FROM public."Service"');
  }
}
export { ServiceRepository };
