import { Router } from 'express';

import { Person } from '../model/Person';
import { PersonRepository } from '../repositories/PersonRepository';
import { PersonService } from '../service/PersonService';

const personsRoutes = Router();
const personRepository = new PersonRepository();

personsRoutes.post('/', (request, response) => {
  const { name, doc, birthDate } = request.body;
  const createPersonService = new PersonService(personRepository);
  createPersonService.execute({ name, doc, birthDate });

  return response.status(201).send();
});

// -- Retornar do banco de dados
personsRoutes.get('/', (request, response) => {
  const all = personRepository.list();

  return response.json(all);
});

export { personsRoutes };
