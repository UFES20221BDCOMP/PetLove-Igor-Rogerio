/**
 * nome - string
 * documento - number
 * data de nascimento - string
 */

interface IPerson {
  name: string;
  doc: number;
  birthDate: string;
}

class PersonService {
  execute({ name, doc, birthDate }: IPerson) {
    console.log(name, doc, birthDate);
  }
}

export default new PersonService();
