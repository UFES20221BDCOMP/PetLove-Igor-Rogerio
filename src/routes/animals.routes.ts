import { Router } from 'express';

import { Animal } from '../model/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';
import { CreateAnimalService } from '../service/CreateAnimalService';

const animalsRoutes = Router();

const animalRepository = new AnimalRepository();

animalsRoutes.post('/', (request, response) => {
  const {
    name, cost, type, owner,
  } = request.body;
  const createPersonService = new CreateAnimalService(animalRepository);
  createPersonService.execute({
    name, cost, type, owner,
  });

  return response.status(201).send();
});

animalsRoutes.get('/', (request, response) => {
  const all = animalRepository.list();

  return response.json(all);
});

export { animalsRoutes };
