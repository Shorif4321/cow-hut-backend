import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express';
const app: Application = express();
import cors from 'cors';
import usersRouter from './app/modules/user/user.route';
import globalErrorHandelers from './app/middlewares/globalErrorHandelers';

// middlewares
app.use(cors());

// parser
app.use(express.json());
app.use(urlencoded({ extended: true }));

// application route
app.use('/api/v1/users/', usersRouter);

//global error handlelar
app.use(globalErrorHandelers);

// testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // Promise.reject(new Error('Unhandle promise Rejection'));
  throw new Error('some error');
  next('api eror from api, line 38');
});

export default app;
