import { DataSource, Repository } from 'typeorm';
import { Service } from '../model/Service';
import { AppDataSource } from '../database';
import { IServiceRepository, ICreateServiceDTO } from './IServiceRepository';
import { response } from 'express';

/* Em Repository temos a interface que é conectada com o banco de dados, aqui estão definidas as querys */

class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = AppDataSource.getRepository(Service);
  }

  /* Query utilizada para buscar serviço pelo nome */
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

  /* Query utilizada para retornar todos os serviços do banco */
  async list(): Promise<Service[]> {
    return await this.repository.query('SELECT * FROM public."Service"');
  }

  delete(id: string): void{
    this.repository.delete(id);
  }
}
export { ServiceRepository };
