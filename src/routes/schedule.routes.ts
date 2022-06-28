import { Router } from 'express';

import scheduleController from "../controller/IndexSchedule";

const scheduleRoutes = Router();

/* Define as rotas relacionadas com a entidade do tipo Schedule, chama os controladores com as
 * funcionalidades e retorna um JSON como resposta. 
 */

scheduleRoutes.post('/', (request, response) => {
  scheduleController().handle(request,response);

  return response.status(201).send();
});

scheduleRoutes.get('/', async (request, response) => {
  return response.json(await scheduleController().list(request,response)).status(200).send();
});

scheduleRoutes.delete('/', async (request, response) => {
  await scheduleController().delete(request.body)
  return response.send(200);
});

export { scheduleRoutes };
