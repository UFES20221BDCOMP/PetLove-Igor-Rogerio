import { Animal } from '../model/Animal';
import { Person } from '../model/Person';
import { Schedule } from '../model/Schedule';
import { Service } from '../model/Service';

interface ICreateScheduleDTO {
  serviceId: string;
  animalId: string;
  date: string;
  owner: string;
  id?: string;
}

interface IScheduleRepository {
  findByAnimal(animal: string): Promise<Schedule[]>;
  findByOwner(owner: string): Promise<Schedule[]>;
  findByService(service: string): Promise<Schedule[]>;
  findByDate(dateBegin: string, DateEnd: string): Promise<Schedule[]>;
  list(
    animal?: string,
    serviceId?: string,
    dateBegin?: string,
    dateEnd?: string): Promise<Schedule[]>;
  create({
    serviceId,
    animalId,
    date,
    id,
  }: ICreateScheduleDTO)

}
export { IScheduleRepository, ICreateScheduleDTO };
