import { Router } from 'express';

import { CustomerRoutes,  } from './customer/routes';
import { VehicleRoutes,  } from './vehicle/routes';
import { FuelRoutes  } from './fuel/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/customers', CustomerRoutes.routes );
    router.use('/api/vehicles', VehicleRoutes.routes );
    router.use('/api/fuels', FuelRoutes.routes );
    
    return router;
  }


}

