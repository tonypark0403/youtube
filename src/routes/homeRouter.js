import express from "express";
import routes from ".";
import * as homeController from '../controllers/homeController';
import * as userController from '../controllers/userController';
import * as videoController from '../controllers/videoController';
const homeRouter = express.Router();

homeRouter.get(routes.home, homeController.home);
homeRouter.get(routes.join, userController.join);
homeRouter.get(routes.login, userController.login);
homeRouter.get(routes.logout, userController.logout);
homeRouter.get(routes.search, videoController.search);

export default homeRouter;