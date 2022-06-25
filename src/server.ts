/*  
 *  Igor Wandermurem Dummer - 2019109389 
 *  Rogério Medeiros - 
*/
import express from 'express';
import "reflect-metadata";
import "./database"

import { animalsRoutes } from './routes/animals.routes';
import { personsRoutes } from './routes/persons.routes';

const app = express();
app.use(express.json());

app.use('/persons', personsRoutes);

app.use('/animals', animalsRoutes);

app.listen(3333, () => console.log('✨ Server is run on port 3333'));
