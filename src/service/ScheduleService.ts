import { Request } from 'express';
import { Schedule } from 'model/Schedule';
import { IScheduleRepository, ICreateScheduleDTO } from '../repositories/IScheduleRepository';

interface IRequest {
  serviceId: string;
  animalId: string;
  owner: string;
  date: string;
  id?: string;
}

class ScheduleService {
  constructor(private scheduleRepository: IScheduleRepository) { }
  create({
    serviceId, animalId, owner, date,
  }: IRequest): void {
    this.scheduleRepository.create({
      serviceId, animalId, owner, date,
    });

  }

  async list(request:Request): Promise<Schedule[]>{
//    const {owner, animal, dateBegin, dateEnd} = request.params;
    return await this.scheduleRepository.list();
  }
}

export { ScheduleService };

//"2019/03/05" > "2020/05/03"
