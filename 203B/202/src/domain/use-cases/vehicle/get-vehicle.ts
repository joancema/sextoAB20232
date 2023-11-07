import { VehicleEntity } from '../../entities/vehicle.entity';
import { VehicleRepository } from '../../repositories/vehicle.repository';


export interface GetVehicleUseCase {
  execute( id: number ): Promise<VehicleEntity>
}


export class GetVehicle implements GetVehicleUseCase {
  
  constructor(
    private readonly repository: VehicleRepository,
  ) {}
  
  execute( id: number ): Promise<VehicleEntity> {
    return this.repository.findById(id);
  }

}

