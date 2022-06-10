import express from 'express';

import { personsRouter } from './routes/persons.routes';

const app = express();
app.use(express.json());

app.use(personsRouter);

app.listen(4000, () => console.log('🧌 Server is run on port 4000'));
