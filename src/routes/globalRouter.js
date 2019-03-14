import express from "express";
import routes from ".";
import * as userController from "../controllers/userController";
import * as videoController from "../controllers/videoController";
import { onlyPublic } from "../middlewares/localsMiddleware";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, userController.getJoin);
globalRouter.post(
  routes.join,
  onlyPublic,
  userController.postJoin,
  userController.postLogin
);

globalRouter.get(routes.login, onlyPublic, userController.getLogin);
globalRouter.post(routes.login, onlyPublic, userController.postLogin);

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.get(routes.logout, onlyPublic, userController.logout);

export default globalRouter;
