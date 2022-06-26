import  createAnimalController  from '../controller/IndexAnimal';
import { request, Router } from 'express';


const animalsRoutes = Router();

animalsRoutes.post('/', (request, response) => {
  return createAnimalController().handle(request,response);
});

animalsRoutes.get('/', (request, response) => {
  return createAnimalController().list();
});

animalsRoutes.get('/:name/',(request, response) => {
  const name = request.params['name'];
  return response.json(createAnimalController().findByName(name));
});

export { animalsRoutes };
