import { UpdateFuelDto } from '../../dtos';
import { FuelEntity } from '../../entities/fuel.entity';
import { FuelRepository } from '../../repositories/fuel.repository';


export interface UpdateFuelUseCase {
  execute( dto: UpdateFuelDto ): Promise<FuelEntity>
}


export class UpdateFuel implements UpdateFuelUseCase {
  
  constructor(
    private readonly repository: FuelRepository,
  ) {}
  
  execute( dto: UpdateFuelDto ): Promise<FuelEntity> {
    return this.repository.updateById(dto);
  }

}

