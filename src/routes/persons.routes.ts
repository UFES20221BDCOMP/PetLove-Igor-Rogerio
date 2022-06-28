import { Router } from 'express';

import PersonController  from '../controller/IndexPerson';

const personsRoutes = Router();

/* Define as rotas relacionadas com a entidade do tipo Person, chama os controladores com as
 * funcionalidades e retorna um JSON como resposta. 
 */

personsRoutes.post('/', (request, response) => {
  PersonController().handle(request, response);
  return response.send(200);
});

personsRoutes.get('/', async (request, response) => {
  return response.json(await PersonController().list()).send();
});

personsRoutes.delete('/', async (request, response) => {
  await PersonController().delete(request.body);
  return response.send(200);
});


export { personsRoutes };
