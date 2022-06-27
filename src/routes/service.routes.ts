import { Router } from 'express';

import ServiceController  from '../controller/IndexService';

const servicesRoutes = Router();

servicesRoutes.post('/', (request, response) => {
  return ServiceController().handle(request, response);
});

// -- Retornar do banco de dados
servicesRoutes.get('/', async (request, response) => {
  return response.json(await ServiceController().list()).send();
});

servicesRoutes.delete('/', async (request, response) => {
  await ServiceController().delete(request.body)
  return response.send(200);
});

export { servicesRoutes };