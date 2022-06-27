import { DataSource, Repository } from 'typeorm';
import { response } from 'express';
import { AppDataSource } from '../database';

import { Schedule } from '../model/Schedule';
import { IScheduleRepository, ICreateScheduleDTO } from './IScheduleRepository';

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

  async findByAnimal(animal: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.animal ILIKE $1',[animal]);
  }
  async findByOwner(owner: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.owner ILIKE $1',[owner]);
  }
  async findByService(service: string): Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule" as S where S.service ILIKE $1',[service]);
  }
  async findByDate(dateBegin: string, DateEnd: string): Promise<Schedule[]> {
    throw new Error('Method not implemented.');
  }

  async list():  Promise<Schedule[]> {
    return await this.repository.query('SELECT * FROM public."Schedule"');
  }
}

export { ScheduleRepository };
