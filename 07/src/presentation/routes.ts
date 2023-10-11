import { Router } from 'express';

import { TodoRoutes,  } from './todos/routes';
import {  UserRoutes  } from './users/routes';
import {  MovieRoutes  } from './movies/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    router.use('/api/movies', MovieRoutes.routes );
    
    return router;
  }


}

