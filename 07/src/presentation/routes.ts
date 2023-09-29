import { Router } from 'express';

import { TodoRoutes,  } from './todos/routes';
import {  UserRoutes  } from './users/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    
    return router;
  }


}

