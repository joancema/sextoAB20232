import { VehicleEntity } from '../../entities/vehicle.entity';
import { VehicleRepository } from '../../repositories/vehicle.repository';


export interface GetVehiclesUseCase {
  execute(): Promise<VehicleEntity[]>
}


export class GetVehicles implements GetVehiclesUseCase {
  
  constructor(
    private readonly repository: VehicleRepository,
  ) {}
  
  execute(): Promise<VehicleEntity[]> {
    return this.repository.getAll();
  }

}

