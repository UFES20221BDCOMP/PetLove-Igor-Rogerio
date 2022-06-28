import  createAnimalController  from '../controller/IndexAnimal';
import { request, Router } from 'express';

const animalsRoutes = Router();

/* Define as rotas relacionadas com a entidade do tipo Animal, chama os controladores com as
 * funcionalidades e retorna um JSON como resposta. 
 */

animalsRoutes.post('/', (request, response) => {
  return createAnimalController().handle(request,response).status(200);
});

animalsRoutes.get('/', async (request, response) => {
  return response.json(await createAnimalController().list()).send();
});

animalsRoutes.get('/:name/',async (request, response) => {
  const name = request.params['name'];
  const animals = await createAnimalController().findByName(name);
  console.log(animals)
  return response.send(animals);
});

animalsRoutes.delete('/',async (request, response) => {
  await createAnimalController().delete(request.body);

  return response.send(200);
});

export { animalsRoutes };
