import { FuelEntity } from '../../entities/fuel.entity';
import { FuelRepository } from '../../repositories/fuel.repository';


export interface GetFuelsUseCase {
  execute(): Promise<FuelEntity[]>
}


export class GetFuels implements GetFuelsUseCase {
  
  constructor(
    private readonly repository: FuelRepository,
  ) {}
  
  execute(): Promise<FuelEntity[]> {
    return this.repository.getAll();
  }

}

