import  createAnimalController  from '../controller/IndexAnimal';
import { Router } from 'express';


const animalsRoutes = Router();

animalsRoutes.post('/', (request, response) => {
  console.log('To na rota');
  return createAnimalController().handle(request,response);
});

animalsRoutes.get('/', (request, response) => {
  return createAnimalController().list();
});

export { animalsRoutes };
