import { FuelEntity } from '../../entities/fuel.entity';
import { FuelRepository } from '../../repositories/fuel.repository';


export interface DeleteFuelUseCase {
  execute( id: number ): Promise<FuelEntity>
}

export class DeleteFuel implements DeleteFuelUseCase {
  
  constructor(
    private readonly repository: FuelRepository,
  ) {}
  
  execute( id: number ): Promise<FuelEntity> {
    return this.repository.deleteById(id);
  }

}

