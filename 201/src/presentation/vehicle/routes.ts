import { Router } from 'express';
import { VehiclesController } from './controller';


export class VehicleRoutes {


  static get routes(): Router {

    const router = Router();

    const vehicleController = new VehiclesController();

    router.get('/', vehicleController.getVehicles );
    router.get('/:id', vehicleController.getVehicleById );
    
    router.post('/', vehicleController.createVehicle );
    router.put('/:id', vehicleController.updateVehicle );
    router.delete('/:id', vehicleController.deleteVehicle );


    return router;
  }


}

