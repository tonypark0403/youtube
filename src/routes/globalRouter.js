import express from "express";
import routes from ".";
import * as userController from "../controllers/userController";
import * as videoController from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.join, userController.getJoin);
globalRouter.post(
  routes.join,
  userController.postJoin,
  userController.postLogin
);

globalRouter.get(routes.login, userController.getLogin);
globalRouter.post(routes.login, userController.postLogin);

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.logout, userController.logout);
globalRouter.get(routes.search, videoController.search);

export default globalRouter;
