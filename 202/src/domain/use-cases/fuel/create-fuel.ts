import { CreateFuelDto } from '../../dtos';
import { FuelEntity } from '../../entities/fuel.entity';
import { FuelRepository } from '../../repositories/fuel.repository';


export interface CreateFuelUseCase {
  execute( dto: CreateFuelDto ): Promise<FuelEntity>
}

// ctrl+ shift + l
export class CreateFuel implements CreateFuelUseCase {
  
  constructor(
    private readonly repository: FuelRepository,
  ) {}
  
  execute( dto: CreateFuelDto ): Promise<FuelEntity> {
    return this.repository.create(dto);
  }

}

