import { IScheduleRepository, ICreateScheduleDTO } from '../repositories/IScheduleRepository';
import { ScheduleRepository } from '../repositories/ScheduleRepository';

interface IRequest {
  service: string;
  animal: string;
  owner: string;
  date: Date;
  id?: string;
}

class CreateScheduleService {
  constructor(private personRepository: IScheduleRepository) { }
  execute({
    service, animal, owner, date,
  }: IRequest): void {
    this.personRepository.create({
      service, animal, owner, date,
    });
    console.log({
      service, animal, owner, date,
    });
  }
}

export { CreateScheduleService };
