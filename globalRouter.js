import express from "express";
import routes from "./routes";
import { home, search, prfmInfo } from "./controllers/performController";

const globalRouter = express.Router();
 
globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.info(), prfmInfo);

export default globalRouter;