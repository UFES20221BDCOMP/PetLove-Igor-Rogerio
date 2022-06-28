import  QuestionController  from '../controller/IndexQuestion';
import { request, Router } from 'express';

const questionsRoutes = Router();

// questionsRoutes.get('/media/:type', async (request, response) => {
//   return response.json(await QuestionController().mediaType(request)).send().status(200);
// });

/* Define as rotas para as chamadas Question, chama os controladores com as
 * funcionalidades e retorna um JSON como resposta. 
 */

questionsRoutes.get('/media',async (request, response) => {
    return response.json(await QuestionController().mediaType(request)).send().status(200);
});

questionsRoutes.get('/quantity',async (request, response) => {
  return response.json(await QuestionController().countType(request)).send().status(200);
});

questionsRoutes.get('/owners',async (request, response) => {
  return response.json(await QuestionController().countType("%")).send().status(200);
});

questionsRoutes.get('/owners/:type',async (request, response) => {
  return response.json(await QuestionController().countType(request.params.type)).send().status(200);
});


export { questionsRoutes };
