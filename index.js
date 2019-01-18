require('dotenv').config();
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

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => {
    res.send("Hello from home");
}

const handleProfile = (req, res) => res.send("You are on my profile");

//set
app.set("view engine", "pug");
app.set('views', path.join(__dirname, './src/views'));
//Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("dev")); //combinded, tiny, common...

const middleware = (req, res, next) => {
    if(req) {
        next();
    }
    res.send("something happen in some case");
}

//Middleware for routing
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.listen(PORT, handleListening);
