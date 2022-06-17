import { Router } from 'express';

import { ServiceRepository } from '../repositories/ServiceRepository';
// import { CreateAnimalService } from '../service/CreateAnimalService';

const serviceRoutes = Router();

const serviceRepository = new ServiceRepository();

/*
serviceRoutes.post('/', (request, response) => {
  const {
    name, cost, type, owner,
  } = request.body;
  const createPersonService = new CreateServiceService(serviceRepository);
  createPersonService.execute({
    name, cost, type, owner,
  });

  return response.status(201).send();
});
*/

serviceRoutes.get('/', (request, response) => {
  const all = serviceRepository.list();

  return response.json(all);
});

export { serviceRoutes };
