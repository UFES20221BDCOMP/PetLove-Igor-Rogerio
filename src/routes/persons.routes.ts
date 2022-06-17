import { Router } from 'express';

import { Person } from '../model/Person';
import { PersonRepository } from '../repositories/PersonRepository';
import { CreatePersonService } from '../service/CreatePersonService';

const personsRoutes = Router();

const persons: Person[] = [];
const personRepository = new PersonRepository();

personsRoutes.post('/', (request, response) => {
  const { name, doc, birthDate } = request.body;

  const createPersonService = new CreatePersonService(personRepository);

  createPersonService.execute({ name, doc, birthDate });

  return response.status(201).send();
});

export { personsRoutes };
