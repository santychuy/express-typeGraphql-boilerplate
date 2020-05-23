import express, { json, Application, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import IndexRoutes from './routes/index.routes';

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(IndexRoutes);

export default app;
