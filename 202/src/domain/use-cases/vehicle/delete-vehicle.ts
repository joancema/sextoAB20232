import { VehicleEntity } from '../../entities/vehicle.entity';
import { VehicleRepository } from '../../repositories/vehicle.repository';


export interface DeleteVehicleUseCase {
  execute( id: number ): Promise<VehicleEntity>
}

export class DeleteVehicle implements DeleteVehicleUseCase {
  
  constructor(
    private readonly repository: VehicleRepository,
  ) {}
  
  execute( id: number ): Promise<VehicleEntity> {
    return this.repository.deleteById(id);
  }

}

