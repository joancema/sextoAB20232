import { CreateVehicleDto } from '../../dtos';
import { VehicleEntity } from '../../entities/vehicle.entity';
import { VehicleRepository } from '../../repositories/vehicle.repository';


export interface CreateVehicleUseCase {
  execute( dto: CreateVehicleDto ): Promise<VehicleEntity>
}

// ctrl+ shift + l
export class CreateVehicle implements CreateVehicleUseCase {
  
  constructor(
    private readonly repository: VehicleRepository,
  ) {}
  
  execute( dto: CreateVehicleDto ): Promise<VehicleEntity> {
    return this.repository.create(dto);
  }

}

