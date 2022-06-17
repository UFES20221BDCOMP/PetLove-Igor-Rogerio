import { Person } from '../model/Person';
import { Service } from '../model/Service';

interface ICreateServiceDTO {
  name: string;
  value: number;
  id?: string;
}

interface IServiceRepository {
  findByName(name: string): Service;
  list(): Service[];
  create({
    name,
    value,
    id,
  }: ICreateServiceDTO)

}
export { IServiceRepository, ICreateServiceDTO };
