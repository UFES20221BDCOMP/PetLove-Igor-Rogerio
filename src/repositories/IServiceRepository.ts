import { Person } from '../model/Person';
import { Service } from '../model/Service';

interface ICreateServiceDTO {
  name: string;
  value: number;
  id?: string;
}

interface IServiceRepository {
  findByName(name: string): Promise<Service[]>;
  list(): Promise<Service[]>;
  create({
    name,
    value,
    id,
  }: ICreateServiceDTO)
  delete(id: string): void;
}
export { IServiceRepository, ICreateServiceDTO };
