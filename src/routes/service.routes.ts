import { Router } from 'express';

import ServiceController  from '../controller/IndexService';

const servicesRoutes = Router();

/* Define as rotas relacionadas com a entidade do tipo Service, chama os controladores com as
 * funcionalidades e retorna um JSON como resposta. 
 */

servicesRoutes.post('/', (request, response) => {
  return ServiceController().handle(request, response);
});

servicesRoutes.get('/', async (request, response) => {
  return response.json(await ServiceController().list()).send();
});

servicesRoutes.delete('/', async (request, response) => {
  await ServiceController().delete(request.body)
  return response.send(200);
});

export { servicesRoutes };