import { IPersonRepository, ICreatePersonDTO } from '../repositories/IPersonRepository';
import { PersonRepository } from '../repositories/PersonRepository';

interface IRequest {
  name: string;
  doc: string;
  birthDate: Date;
}

class CreatePersonService {
  constructor(private personRepository: IPersonRepository) { }

  execute({ name, doc, birthDate }: IRequest): void {
    const personAlreadyExists = this.personRepository.findByDoc(doc);
    if (personAlreadyExists) {
      throw new Error('Person already exists');
    }
    this.personRepository.create({ name, doc, birthDate });
    console.log({ name, doc, birthDate });
  }
}

export { CreatePersonService };

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
