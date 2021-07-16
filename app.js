import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { localMiddleware } from './middleware';
import globalRouter from "./globalRouter";
import routes from "./routes";
import jquery from "jquery";
//import performAPI from './api';
  
const app = express();
 
app.set("view engine", "pug");
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use("/static", express.static("static"));
 
/*app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(localMiddleware);

app.use((req,res,next) => {
    res.locals.routes = routes;
    res.locals.siteTitle ="All the Performance";
    next();
}) 
app.use("/", globalRouter);
 
export default app;