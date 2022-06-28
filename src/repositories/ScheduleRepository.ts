import { DataSource, Repository } from 'typeorm';
import { response } from 'express';
import { AppDataSource } from '../database';

import { Schedule } from '../model/Schedule';
import { IScheduleRepository, ICreateScheduleDTO } from './IScheduleRepository';

/* Em Repository temos a interface que é conectada com o banco de dados, aqui estão definidas as querys */

class ScheduleRepository implements IScheduleRepository {
  private repository: Repository<Schedule>;

  constructor() {
    this.repository = AppDataSource.getRepository(Schedule);
  }

  create({
    serviceId, animalId, date, id, owner
  }: ICreateScheduleDTO) {
    const schedule = this.repository.create({service: serviceId,animal: animalId,date,id});
    this.repository.save(schedule);
  }

  /* Query utilizada para buscar agendamento por um animal */
  async findByAnimal(animal: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.animal ILIKE $1',[animal]);
  }

  /* Query utilizada para buscar agendamento pelo dono do animal */
  async findByOwner(owner: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.owner ILIKE $1',[owner]);
  }

  /* Query utilizada para buscar agendamento pelo serviço */
  async findByService(service: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.service ILIKE $1',[service]);
  }

  /* Query utilizada para buscar agendamento pela data */
  async findByDate(dateBegin: string, DateEnd: string): Promise<Schedule[]> {
    throw new Error('Method not implemented.');
  }

  /* Query utilizada para buscar todos os agendamentos */
  async list():  Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule"');
  }

  delete(id: string): void{
    this.repository.delete(id);
  }
}

export { ScheduleRepository };
