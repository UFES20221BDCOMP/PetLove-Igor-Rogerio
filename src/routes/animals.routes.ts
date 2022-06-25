import { AnimalController } from '../controller/AnimalController';
import { Router } from 'express';

import { Animal } from '../model/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';
import { AnimalService } from '../service/AnimalService';

const animalsRoutes = Router();

const animalRepository = new AnimalRepository();
const animalController = new AnimalController();

animalsRoutes.post('/', (request, response) => {
  return animalController.create(request,response);
});

animalsRoutes.get('/', (request, response) => {
  return animalController.list();
});

export { animalsRoutes };
