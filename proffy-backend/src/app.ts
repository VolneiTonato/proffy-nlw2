import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import ErrorMidleware from './midlewares/error.midleware';
import routes from './routes';
import createConnection from './database/providerSQLite3';

createConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.use(ErrorMidleware);

export default app;
