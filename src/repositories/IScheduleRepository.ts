import { Animal } from '../model/Animal';
import { Person } from '../model/Person';
import { Schedule } from '../model/Schedule';
import { Service } from '../model/Service';

interface ICreateScheduleDTO {
  service: string;
  animal: string;
  owner: string;
  date: Date;
  id?: string;
}

interface IScheduleRepository {
  findByAnimal(animal: string): Schedule[];
  findByOwner(owner: string): Schedule[];
  findByService(Service: string): Schedule[];
  findByDate(dateBegin: Date, DateEnd: Date): Schedule[];
  list(
    owner?: string,
    animal?: string,
    service?: string,
    dateBegin?: Date,
    dateEnd?: Date): Schedule[];
  create({
    service,
    animal,
    owner,
    date,
    id,
  }: ICreateScheduleDTO)

}
export { IScheduleRepository, ICreateScheduleDTO };
