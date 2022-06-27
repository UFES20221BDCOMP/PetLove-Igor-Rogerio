/*  Igor Wandermurem Dummer - 2019109389 
 *  Rogério Medeiros - 2019109361             */

import express from 'express';
import  { AppDataSource }  from "./database";
import "reflect-metadata";
import "./database"

import { animalsRoutes } from './routes/animals.routes';
import { personsRoutes } from './routes/persons.routes';
import { servicesRoutes } from './routes/service.routes';
import { scheduleRoutes } from './routes/schedule.routes';
import { questionsRoutes } from './routes/questions.routes';

const app = express();
app.use(express.json());

app.use('/persons', personsRoutes);
app.use('/animals', animalsRoutes);
app.use('/services', servicesRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/questions', questionsRoutes);

app.listen(3333, () => console.log('✨ Server is run on port 3333'));
