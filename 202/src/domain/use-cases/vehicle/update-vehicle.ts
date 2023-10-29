import { UpdateVehicleDto } from '../../dtos';
import { VehicleEntity } from '../../entities/vehicle.entity';
import { VehicleRepository } from '../../repositories/vehicle.repository';


export interface UpdateVehicleUseCase {
  execute( dto: UpdateVehicleDto ): Promise<VehicleEntity>
}


export class UpdateVehicle implements UpdateVehicleUseCase {
  
  constructor(
    private readonly repository: VehicleRepository,
  ) {}
  
  execute( dto: UpdateVehicleDto ): Promise<VehicleEntity> {
    return this.repository.updateById(dto);
  }

}

