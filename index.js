require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => {
    res.send("Hello from home");
}

const handleProfile = (req, res) => res.send("You are on my profile");

//Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(margan("dev")); //combinded, tiny, common...

const middleware = (req, res, next) => {
    res.send("something happen in some case");
}

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
