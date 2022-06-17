import { Schedule } from '../model/Schedule';
import { IScheduleRepository, ICreateScheduleDTO } from './IScheduleRepository';

class ScheduleRepository implements IScheduleRepository {
  findByAnimal(animal: string): Schedule[] {
    throw new Error('Method not implemented.');
  }
  findByOwner(owner: string): Schedule[] {
    throw new Error('Method not implemented.');
  }
  findByService(Service: string): Schedule[] {
    throw new Error('Method not implemented.');
  }
  findByDate(dateBegin: Date, DateEnd: Date): Schedule[] {
    throw new Error('Method not implemented.');
  }
  list(
    owner?: string,
    animal?: string,
    service?: string,
    dateBegin?: Date,
    dateEnd?: Date,
  ): Schedule[] {
    throw new Error('Method not implemented.');
  }
  create({
    service, animal, owner, date, id,
  }: ICreateScheduleDTO) {
    throw new Error('Method not implemented.');
  }
}

export { ScheduleRepository };
