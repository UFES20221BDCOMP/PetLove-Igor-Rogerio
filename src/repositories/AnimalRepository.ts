import { DataSource, Repository } from 'typeorm';
import { Animal } from '../model/Animal';
import { Person } from '../model/Person';
import { AppDataSource } from '../database';

import { IAnimalRepository, ICreateAnimalDTO } from './IAnimalRepository';
import { response } from 'express';

/* Em Repository temos a interface que é conectada com o banco de dados, aqui estão definidas as querys */

class AnimalRepository implements IAnimalRepository {

  private repository: Repository<Animal>;

  constructor() {
    this.repository = AppDataSource.getRepository(Animal);

  }
  /* Query utilizada para calcular a quantidade de animais, dependendo do filtro passado como parâmetro */
  /* Caso não passe uma data, recebe como padrão a primeira e ultima datas possíveis. Em caso de string, recebe uma % */
  async findQtt({ animalName, animalType, personName, dateBegin, dateEnd, serviceName }) {
    const qtd = await this.repository.query('SELECT count(DISTINCT A.name) as quantity FROM public."Animal" as A LEFT join public."Schedule" AS Sc on A.id = Sc."animalId" '+
                                        'LEFT JOIN public."Service" AS S on S.id = Sc."serviceId" LEFT JOIN public."Person" as P on A."ownerDoc" = P.doc '+
                                        'WHERE (A.name ILIKE $1 or $1 = \'%\') and (A.type ILIKE $2 or $2 = \'%\') and (P.name ILIKE $3 or $3 = \'%\')' +
                                        'and (Sc.date > $4 or $4 = \'0001/01/01\') and (Sc.date > $5 or $5 = \'9999/12/31\') and (S.name ILIKE $6 or $6 = \'%\')',
                                        [animalName,animalType,personName,dateBegin,dateEnd,serviceName]);
    console.log(qtd);
                                        
    return qtd;
  }

  /* Query utilizada para calcular o custo total gasto para um determinado animal */
  async calcCostName(id: string): Promise<number>{
    return await this.repository.query('SELECT sum(s.value) from public."Schedule" as sc join public."Animal" as a on sc."animalId" = a.id ' +
                                        'join public."Service" as S on sc."serviceId" = s.id where a.id = $1',[id]);
  }

  /* Query utilizada para fazer a busca pelo tipo do animal */
  async findByType(type: string):Promise<Animal[]>{
    return await this.repository.query('SELECT * FROM public."Animal" where type ILIKE $1',[type]);
  }
    /* Query utilizada para calcular a media dos gastos do animal, dependendo do filtro sendo passado como parâmetro */
    /* Caso não passe uma data, recebe como padrão a primeira e ultima datas possíveis. Em caso de string, recebe uma % */
    async calcMedia({animalName,animalType,personName,dateBegin,dateEnd,serviceName}): Promise<number>{
      return await this.repository.query('SELECT sum(value)/cast( count(a.name) as float) as media FROM public."Animal" as A LEFT join public."Schedule" AS Sc on '+
                                        'A.id = Sc."animalId" LEFT JOIN public."Service" AS S on S.id = Sc."serviceId" LEFT JOIN public."Person" as P on A."ownerDoc" = P.doc '+
                                        'WHERE (A.name ILIKE $1 or $1 = \'%\') and (A.type ILIKE $2 or $2 = \'%\') and (P.name ILIKE $3 or $3 = \'%\')' +
                                        'and (Sc.date > $4 or $4 = \'0001/01/01\') and (Sc.date > $5 or $5 = \'9999/12/31\') and (S.name ILIKE $6 or $6 = \'%\')',
                                        [animalName,animalType,personName,dateBegin,dateEnd,serviceName]);
    }
  
  /* Query utilizada para buscar um animal de acordo com seu nome */
  async findByName(name: string): Promise<Animal[]> {
    const animals = await this.repository.query('SELECT * FROM public."Animal" as animal where animal.name ILIKE $1',[name]);
    return animals;
  }

  /* Query utilizada para buscar um animal de acordo com seu dono */
  async findByOwner(person: Person): Promise<Animal[]> {
    return await this.repository.query('SELECT * FROM (public."Animal" as A join public."Person" as P on doc="ownerDoc"P) where P.name ILIKE $1',[person.name])
  }

  async create({
    name,
    owner,
    type,
  }: ICreateAnimalDTO) {
    
    const animals = await this.repository.create({name,owner,type});
    
    await this.repository.save(animals);
  }

  /* Retorna todos os animais do banco */
  async list(): Promise<Animal[]> {
    const animals = await this.repository.query('SELECT * FROM public."Animal"');

    return animals;
  }

  async findByOwnerName(person: string, name: string): Promise<Animal[]>{
    console.log(person);
    const animal = await this.repository.query('SELECT * FROM public."Animal" as A where'
                                      + ' A.name ILIKE $1 and A."ownerDoc" = $2',[name,person]);
    console.log(animal);
                                      
    return animal;
  }

  async findByAnimalOwner(name: string, owner: string): Promise<Animal[]>{
    const animal = await this.repository.query('SELECT * FROM public."Animal" as A where'
                                      + ' A.name ILIKE $1 and A."ownerDoc" = $2',[name, owner]);
    console.log(animal);
    return animal;
  }

  delete(id: string): void{
    this.repository.delete(id);
  }
}
export { AnimalRepository };
