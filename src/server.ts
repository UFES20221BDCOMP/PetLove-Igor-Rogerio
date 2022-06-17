import express from 'express';

import { animalsRoutes } from './routes/animals.routes';
import { personsRoutes } from './routes/persons.routes';

const app = express();
app.use(express.json());

app.use('/persons', personsRoutes);

app.use('/animals', animalsRoutes);

app.listen(4000, () => console.log('🧌 Server is run on port 4000'));
