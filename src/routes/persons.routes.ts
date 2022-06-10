import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import PersonService from '../PersonService';

const personsRouter = Router();

const persons = [];

personsRouter.post('/persons', (request, response) => {
  const { name, doc, birthDate } = request.body;

  persons.push({
    name, doc, birthDate,
  });

  PersonService.execute({ name, doc, birthDate });

  return response.status(201).send();
});

export { personsRouter };
