import { Router } from 'express';

import { CustomerRoutes,  } from './customer/routes';
import { VehicleRoutes,  } from './vehicle/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/customers', CustomerRoutes.routes );
    router.use('/api/vehicles', VehicleRoutes.routes );
    
    return router;
  }


}

