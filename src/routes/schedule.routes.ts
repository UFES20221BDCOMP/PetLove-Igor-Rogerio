import { Router } from 'express';

import { Schedule } from '../model/Schedule';
import { ScheduleRepository } from '../repositories/ScheduleRepository';
import { CreateScheduleService } from '../service/CreateScheduleService';

const scheduleRoutes = Router();

const scheduleRepository = new ScheduleRepository();

scheduleRoutes.post('/', (request, response) => {
  const {
    service,
    animal,
    owner,
    date,
  } = request.body;
  const createPersonService = new CreateScheduleService(scheduleRepository);
  createPersonService.execute({
    service,
    animal,
    owner,
    date,
  });

  return response.status(201).send();
});

scheduleRoutes.get('/', (request, response) => {
  const {
    service,
    animal,
    owner,
    date,
  } = request.body;

  const all = scheduleRepository.list();

  return response.json(all);
});

export { scheduleRoutes };
