import { Router } from 'express';

import PersonController  from '../controller/IndexPerson';

const personsRoutes = Router();

personsRoutes.post('/', (request, response) => {
  PersonController().handle(request, response);
  return response.send(201);
});

personsRoutes.get('/', async (request, response) => {
  return response.json(await PersonController().list()).send();
});

personsRoutes.get('/:name/', async (request, response) => {
  return response.json(await PersonController().list()).send();
});

export { personsRoutes };
