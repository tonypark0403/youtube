import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

import homeRouter from './src/routes/homeRouter';
import userRouter from './src/routes/userRouter';
import videoRouter from './src/routes/videoRouter';
import routes from "./src/routes";

const app = express();

//set
app.set("view engine", "pug");
app.set('views', path.join(__dirname, './src/views'));
//Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("dev")); //combinded, tiny, common...

//Middleware for routing
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
