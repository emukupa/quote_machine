import express from 'express';
import routes from './api/routes';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// instantiate an express app
const app = express();

app.use(morgan('dev'));
app.use(helmet());

const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));

routes(app);

export default app;
