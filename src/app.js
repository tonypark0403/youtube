import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import path from "path";

import { localsMiddleware } from "./middlewares/localsMiddleware";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

import "../passport";

const app = express();

// set
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// Middlewares
app.use("/uploads", express.static("uploads/"));
app.use("/static", express.static("static"));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // combinded, tiny, common...
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware); // about routes so should be before routers

// Middleware for routing
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
