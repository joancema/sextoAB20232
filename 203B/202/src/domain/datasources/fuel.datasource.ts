import { CreateFuelDto, UpdateFuelDto } from '../dtos';
import { FuelEntity } from '../entities/fuel.entity';



export abstract class FuelDatasource {

  abstract create( createFuelDto: CreateFuelDto ): Promise<FuelEntity>;

  abstract getAll(): Promise<FuelEntity[]>;

  abstract findById( id: number ): Promise<FuelEntity>;
  abstract updateById( updateFuelDto: UpdateFuelDto ): Promise<FuelEntity>;
  abstract deleteById( id: number ): Promise<FuelEntity>;

}