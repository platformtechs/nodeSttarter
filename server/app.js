import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { MeetupRoutes, GroupRoutes} from './modules';

const app = express();

/*====Database config===*/
dbConfig();

/*====Middleware config===*/
middlewareConfig(app);


app.use('/api', [MeetupRoutes, GroupRoutes])



module.exports = app;
