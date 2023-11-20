import { Router } from 'express';
import { FuelsController } from './controller';
import { FuelDatasourceImpl } from '../../infrastructure/datasource/fuel.datasource.impl';
import { FuelRepositoryImpl } from '../../infrastructure/repositories/fuel.repository.impl';


export class FuelRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new FuelDatasourceImpl();
    const fuelRepository = new FuelRepositoryImpl( datasource );
    const fuelController = new FuelsController(fuelRepository);

    router.get('/', fuelController.getFuels );
    router.get('/:id', fuelController.getFuelById );
    
    router.post('/', fuelController.createFuel );
    router.put('/:id', fuelController.updateFuel );
    router.delete('/:id', fuelController.deleteFuel );


    return router;
  }


}

