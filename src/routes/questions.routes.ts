import  QuestionController  from '../controller/IndexQuestion';
import { request, Router } from 'express';

const questionsRoutes = Router();

questionsRoutes.get('/media/:type', async (request, response) => {
  return response.json(await QuestionController().mediaType(request.params.type)).send().status(200);
});

questionsRoutes.get('/media',async (request, response) => {
    return response.json(await QuestionController().mediaType("%")).send().status(200);
});

questionsRoutes.get('/quantity',async (request, response) => {
  return response.json(await QuestionController().countType("%")).send().status(200);
});

questionsRoutes.get('/quantity/:type',async (request, response) => {
  return response.json(await QuestionController().countType(request.params.type)).send().status(200);
});

questionsRoutes.get('/owners',async (request, response) => {
  return response.json(await QuestionController().countType("%")).send().status(200);
});

questionsRoutes.get('/owners/:type',async (request, response) => {
  return response.json(await QuestionController().countType(request.params.type)).send().status(200);
});


export { questionsRoutes };
