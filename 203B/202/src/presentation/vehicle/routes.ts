import { Router } from 'express';
import { VehiclesController } from './controller';
import { VehicleDatasourceImpl } from '../../infrastructure/datasource/vehicle.datasource.impl';
import { VehicleRepositoryImpl } from '../../infrastructure/repositories/vehicle.repository.impl';


export class VehicleRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new VehicleDatasourceImpl();
    const vehicleRepository = new VehicleRepositoryImpl( datasource );
    const vehicleController = new VehiclesController(vehicleRepository);

    router.get('/', vehicleController.getVehicles );
    router.get('/:id', vehicleController.getVehicleById );
    
    router.post('/', vehicleController.createVehicle );
    router.put('/:id', vehicleController.updateVehicle );
    router.delete('/:id', vehicleController.deleteVehicle );


    return router;
  }


}

