import { Person } from 'model/Person';
import { IPersonRepository, ICreatePersonDTO } from '../repositories/IPersonRepository';
import { PersonRepository } from '../repositories/PersonRepository';

interface IRequest {
  name: string;
  doc: string;
  birthDate: string;
}

/* Lógica entre o controlador e o respositório */
class PersonService {
  constructor(private personRepository: IPersonRepository) { }
  delete(id: string) {
    this.personRepository.delete(id);
  }

  async create({ name, doc, birthDate }: IRequest) {
    const personAlreadyExists = await this.personRepository.findByDoc(doc);
    try {
      if(personAlreadyExists.length == 0) { /* Verifica se a pessoa ja existe no banco */
        this.personRepository.create({ name, doc, birthDate });
      }
      throw new Error('Person already exists');
    }
    catch{
      console.log('Person already exists');
    }
  }

  list(){
    return this.personRepository.list();
  }
}

export { PersonService };

/**
 //* nome - string
 //* documento - number
 //* data de nascimento - string

 interface IPerson {
  name: string;
  doc: number;
  birthDate: Date;
}

class PersonService {
  execute({ name, doc, birthDate }: IPerson) {
    console.log(name, doc, birthDate);
  }
}

export default new PersonService();

*/
