import { FuelEntity } from '../../entities/fuel.entity';
import { FuelRepository } from '../../repositories/fuel.repository';


export interface GetFuelUseCase {
  execute( id: number ): Promise<FuelEntity>
}


export class GetFuel implements GetFuelUseCase {
  
  constructor(
    private readonly repository: FuelRepository,
  ) {}
  
  execute( id: number ): Promise<FuelEntity> {
    return this.repository.findById(id);
  }

}

